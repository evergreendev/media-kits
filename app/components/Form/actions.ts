'use server'


import {redirect} from "next/navigation";
import { cookies } from "next/headers";
import {addTags, upsertMember, mcHash} from "@/app/lib/mailchimp";
import { encodeUid } from "@/app/lib/userId";

export async function subscribe(prevState: boolean, formData: FormData) {
    const firstName = formData.get("firstName") as string | null;
    const lastName = formData.get("lastName") as string | null;
    const email: string | null = formData.get("email") as string | null;
    const mediaKitPub = formData.get("mediaKitPub") as string | null;

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const subscriberInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        status: "subscribed",
        tags: [mediaKitPub],
    }
    if (!audienceId || !subscriberInfo.email) {
        return false;
    }

    await upsertMember(audienceId, subscriberInfo.email, {
        FNAME: subscriberInfo.firstName,
        LNAME: subscriberInfo.lastName
    });

    // Set em_uid cookie with Mailchimp subscriberHash for 180 days
    try {
        const hash = mcHash(subscriberInfo.email);
        const encoded = encodeUid({ version: "v1", vendor: "mc", id: hash });
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

    if (!mediaKitPub){
        // If mediaKitPub is missing, just redirect to root as a fallback
        redirect(`/`);
    }

    try {
        await addTags(audienceId, mcHash(subscriberInfo.email), [mediaKitPub]);
    }catch(e) {

    }

    return true;
}
