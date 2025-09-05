'use server'


import {redirect} from "next/navigation";
import {addTags, upsertMember} from "@/app/lib/mailchimp";

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

    if (!mediaKitPub){
        redirect(`/${mediaKitPub}/media-kit`);
    }

    await addTags(audienceId, subscriberInfo.email, [mediaKitPub]);


    redirect(`/${mediaKitPub}/media-kit`);


}
