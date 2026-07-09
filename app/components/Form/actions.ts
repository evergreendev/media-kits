'use server'

import { cookies } from "next/headers";
import { encodeUid } from "@/app/lib/userId";
import {upsertContactMediaKitViewed} from "@/app/lib/hubspot";

export async function subscribe(prevState: boolean, formData: FormData) {
    const firstName = formData.get("firstName") as string | null;
    const lastName = formData.get("lastName") as string | null;
    const email: string | null = formData.get("email") as string | null;
    const mediaKitPub = formData.get("mediaKitPub") as string | null;

    const subscriberInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    }
    if (!subscriberInfo.email || !mediaKitPub) {
        return false;
    }

    let contact;
    try {
        contact = await upsertContactMediaKitViewed({
            email: subscriberInfo.email,
            firstName: subscriberInfo.firstName,
            lastName: subscriberInfo.lastName,
            mediaKitPub,
        });
    } catch (e) {
        console.error("Failed to update HubSpot contact", e);
        return false;
    }

    if (!contact?.id) {
        return false;
    }

    // Set em_uid cookie with HubSpot contact id for 180 days
    try {
        const encoded = encodeUid({ version: "v1", vendor: "hs", id: contact.id });
        const maxAge = 60 * 60 * 24 * 180; // 180 days in seconds
        // Note: httpOnly is false because the client needs to read this cookie to bypass the form.
        // Use SameSite=Lax to maintain CSRF protections for top-level navigations while remaining compatible.
        (await cookies()).set("em_uid", encoded, {
            httpOnly: false,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge,
        });
    } catch (e) {
        // Non-fatal: proceed without cookie if something goes wrong
        console.error("Failed to set em_uid cookie", e);
    }

    return true;
}
