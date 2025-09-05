'use server'
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export const tagUser = async (tag:string) => {
    console.log(tag);

    const response = await mailchimp.ping.get();

    console.log(response);

    return tag;
}
