import type {MediaKitSession} from "./mediaKitSession";

export function hubspotFormUrl(formUrl: string, session: MediaKitSession | null) {
    const url = new URL(formUrl);
    if (session) {
        // Reuse only details this visitor submitted to the media kit form.
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
