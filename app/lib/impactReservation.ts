import type {MediaKitSession} from "./mediaKitSession";
import {hubspotFormUrl} from "./hubspotFormUrl";

export const IMPACT_FORM_URL = "https://bp8pl.share-na2.hsforms.com/21Nfccb3gTQyQpZgi6GULaA";

export function impactReservationUrl(session: MediaKitSession | null) {
    return hubspotFormUrl(IMPACT_FORM_URL, session);
}
