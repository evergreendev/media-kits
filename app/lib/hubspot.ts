export const MEDIA_KIT_VIEWED_OPTIONS = {
    "black-hills-family": "Black Hills Family",
    "black-hills-bride": "Black Hills Bride",
    faces: "FACES of The Black Hills",
} as const;

export const AD_SIZES_VIEWED_OPTIONS = {
    "2 Page Spread": "2 Page Spread",
    "double-page-spread": "2 Page Spread",
    "double-page-spread-bride": "2 Page Spread",
    "Full Page": "Full Page",
    "full-page": "Full Page",
    "full-page-bride": "Full Page",
    "Half Page H": "Half Page H",
    "half-page-h": "Half Page H",
    "half-page-h-bride": "Half Page H",
    "Half Page V": "Half Page V",
    "half-page-v": "Half Page V",
    "half-page-v-bride": "Half Page V",
    "half-page-bride": "Half Page H",
    "Quarter Page": "Quarter Page",
    "quarter-page": "Quarter Page",
    "Professional Spotlight": "Professional Spotlight",
    "professional-spotlight": "Professional Spotlight",
    "professional-spotlight-bride": "Professional Spotlight",
    "Digital Ad": "Digital Ad",
    "digital-ad": "Digital Ad",
    "digital-ad-package-bride": "Digital Ad",
    Advertorial: "Advertorial",
    advertorial: "Advertorial",
    "2 Page Advertorial": "2 Page Advertorial",
    "2-page-advertorial": "2 Page Advertorial",
    Insert: "Insert",
    insert: "Insert",
} as const;

export type MediaKitSlug = keyof typeof MEDIA_KIT_VIEWED_OPTIONS;
export type AdSizeViewedOption = keyof typeof AD_SIZES_VIEWED_OPTIONS;

type HubSpotContact = {
    id: string;
    properties?: Record<string, string | null>;
};

type ContactInput = {
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    mediaKitPub: string;
};

function getAccessToken() {
    return process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN ?? process.env.HUBSPOT_ACCESS_TOKEN;
}

function getMediaKitViewedValue(mediaKitPub: string) {
    return MEDIA_KIT_VIEWED_OPTIONS[mediaKitPub as MediaKitSlug] ?? null;
}

function getAdSizeViewedValue(adSize: string) {
    return AD_SIZES_VIEWED_OPTIONS[adSize as AdSizeViewedOption] ?? null;
}

async function hubSpotRequest<T>(path: string, init: RequestInit): Promise<T> {
    const accessToken = getAccessToken();

    if (!accessToken) {
        throw new Error("Missing HUBSPOT_PRIVATE_APP_ACCESS_TOKEN or HUBSPOT_ACCESS_TOKEN");
    }

    const res = await fetch(`https://api.hubapi.com${path}`, {
        ...init,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            ...init.headers,
        },
    });

    if (!res.ok) {
        const body = await res.text();
        throw new Error(`HubSpot request failed (${res.status}): ${body}`);
    }

    if (res.status === 204) {
        return undefined as T;
    }

    return res.json() as Promise<T>;
}

export async function findContactByEmail(email: string) {
    const data = await hubSpotRequest<{ results?: HubSpotContact[] }>(
        "/crm/v3/objects/contacts/search",
        {
            method: "POST",
            body: JSON.stringify({
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: "email",
                                operator: "EQ",
                                value: email.trim().toLowerCase(),
                            },
                        ],
                    },
                ],
                properties: ["email", "firstname", "lastname", "media_kit_viewed", "ad_sizes_viewed"],
                limit: 1,
            }),
        }
    );

    return data.results?.[0] ?? null;
}

export async function updateContactMediaKitViewed(contactId: string, mediaKitPub: string) {
    const mediaKitViewed = getMediaKitViewedValue(mediaKitPub);

    if (!mediaKitViewed) {
        return null;
    }

    return hubSpotRequest<HubSpotContact>(`/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify({
            properties: {
                media_kit_viewed: mediaKitViewed,
            },
        }),
    });
}

export async function getContactAdSizesViewed(contactId: string) {
    return hubSpotRequest<HubSpotContact>(
        `/crm/v3/objects/contacts/${contactId}?properties=ad_sizes_viewed`,
        {
            method: "GET",
        }
    );
}

export async function updateContactAdSizeViewed(contactId: string, adSize: string) {
    const adSizeViewed = getAdSizeViewedValue(adSize);

    if (!adSizeViewed) {
        return null;
    }

    const contact = await getContactAdSizesViewed(contactId);
    const currentAdSizes = contact.properties?.ad_sizes_viewed
        ?.split(";")
        .map((value) => value.trim())
        .filter(Boolean) ?? [];
    const nextAdSizes = Array.from(new Set([...currentAdSizes, adSizeViewed]));

    return hubSpotRequest<HubSpotContact>(`/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify({
            properties: {
                ad_sizes_viewed: nextAdSizes.join(";"),
            },
        }),
    });
}

export async function createContactWithMediaKitViewed(input: ContactInput) {
    const mediaKitViewed = getMediaKitViewedValue(input.mediaKitPub);

    if (!mediaKitViewed) {
        return null;
    }

    return hubSpotRequest<HubSpotContact>("/crm/v3/objects/contacts", {
        method: "POST",
        body: JSON.stringify({
            properties: {
                email: input.email.trim().toLowerCase(),
                firstname: input.firstName ?? "",
                lastname: input.lastName ?? "",
                media_kit_viewed: mediaKitViewed,
            },
        }),
    });
}

export async function upsertContactMediaKitViewed(input: ContactInput) {
    const existingContact = await findContactByEmail(input.email);

    if (existingContact) {
        return updateContactMediaKitViewed(existingContact.id, input.mediaKitPub);
    }

    return createContactWithMediaKitViewed(input);
}
