'use server'
import {cookies} from 'next/headers'
import {decodeUid} from "@/app/lib/userId";
import {updateContactAdSizeViewed, updateContactMediaKitViewed} from "@/app/lib/hubspot";

async function getHubSpotContactIdFromCookie() {
    const cookieStore = await cookies()
    const emUid = cookieStore.get('em_uid')


    if (!emUid) {
        return null
    }

    const uid = decodeUid(emUid.value);

    if (!uid) {
        return null
    }

    return uid.id;
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
