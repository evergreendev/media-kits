'use server'
import {cookies} from 'next/headers'
import {readMediaKitSession} from "@/app/lib/mediaKitSession";
import {updateContactAdSizeViewed, updateContactMediaKitViewed} from "@/app/lib/hubspot";

async function getHubSpotContactIdFromCookie() {
    const cookieStore = await cookies()
    const emUid = cookieStore.get('em_uid')


    if (!emUid) {
        return null
    }

    const uid = await readMediaKitSession(emUid.value);

    if (!uid) {
        return null
    }

    return uid.contactId;
}

export const updateMediaKitViewedForUser = async (mediaKitPub:string) => {
    const contactId = await getHubSpotContactIdFromCookie()

    if (!contactId) {
        return null
    }
    
    try {
        const contact = await updateContactMediaKitViewed(contactId, mediaKitPub)
        return contact ? mediaKitPub : null
    } catch (e) {
        console.error("Failed to update HubSpot media_kit_viewed", e);
        return null
    }
}

export const tagUser = async (tag:string) => {
    const contactId = await getHubSpotContactIdFromCookie()

    if (!contactId) {
        return null
    }

    try {
        const contact = await updateContactAdSizeViewed(contactId, tag)
        return contact ? tag : null
    } catch (e) {
        console.error("Failed to update HubSpot ad_sizes_viewed", e);
        return null
    }
}
