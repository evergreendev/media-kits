import type {MediaKitSession} from "./mediaKitSession";

export const IMPACT_FORM_URL = "https://bp8pl.share-na2.hsforms.com/21Nfccb3gTQyQpZgi6GULaA";

export function impactReservationUrl(session: MediaKitSession | null) {
    const url = new URL(IMPACT_FORM_URL);
    if (session) {
        // Only reuse details submitted by this visitor, never retrieve CRM PII
        // based on an unverified email address or contact ID.
        const fields = {
            firstname: session.firstName, lastname: session.lastName,
            email: session.email, name: session.organizationName,
        };
        for (const [name, value] of Object.entries(fields)) {
            if (value) url.searchParams.set(name, value);
        }
    }
    return url.toString();
}
