'use server'

import { cookies } from "next/headers";
import {createMediaKitSession, sessionCookieOptions} from "@/app/lib/mediaKitSession";
import {MEDIA_KIT_VIEWED_OPTIONS, upsertContactMediaKitViewed} from "@/app/lib/hubspot";

export async function subscribe(prevState: boolean, formData: FormData) {
    const field = (name: string) => {
        const value = formData.get(name);
        return typeof value === "string" ? value.trim() : "";
    };
    const firstName = field("firstName");
    const lastName = field("lastName");
    const email = field("email");
    const mediaKitPub = field("mediaKitPub");
    const organizationName = field("organizationName");
    const subscriberInfo = {firstName, lastName, email};
    if (!firstName || !organizationName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        || !Object.hasOwn(MEDIA_KIT_VIEWED_OPTIONS, mediaKitPub)
        || [firstName, lastName, email, organizationName].some(value => value.length > 254)) {
        return false;
    }

    let contact;
    try {
        contact = await upsertContactMediaKitViewed({
            email: subscriberInfo.email,
            firstName: subscriberInfo.firstName,
            lastName: subscriberInfo.lastName,
            mediaKitPub,
            organizationName,
        });
    } catch (e) {
        console.error("Failed to update HubSpot contact", e);
        return false;
    }

    if (!contact?.id) {
        return false;
    }

    try {
        const token = await createMediaKitSession({
            contactId: contact.id, firstName, lastName, email, organizationName,
        });
        (await cookies()).set("em_uid", token, sessionCookieOptions);
    } catch {
        console.error("Failed to create secure media kit session; check MEDIA_KIT_SESSION_SECRET");
        return false;
    }

    return true;
}
