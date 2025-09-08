'use server'
import mailchimp from "@mailchimp/mailchimp_marketing"
import {cookies} from 'next/headers'
import {addTags} from "@/app/lib/mailchimp";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export const tagUser = async (tag:string) => {
    const cookieStore = await cookies()
    const emUid = cookieStore.get('em_uid')
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!emUid || !audienceId) {
        return null
    }
    
    try {
        await addTags(audienceId, emUid.value.split(":")[2], [tag])
    } catch (e) {

    }



    return tag;
}
