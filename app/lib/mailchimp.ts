import mailchimp from "@mailchimp/mailchimp_marketing";

import crypto from "crypto";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export function mcHash(email: string) {
    return crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

export async function upsertMember(listId: string, email: string, mergeFields?: Record<string, string|null>) {
    const subscriberHash = mcHash(email);
    return mailchimp.lists.setListMember(listId, subscriberHash, {
        email_address: email,
        // If new → use this status. If existing → this can also re-subscribe (get consent first).
        status_if_new: "subscribed",
        status: "subscribed",
        merge_fields: mergeFields ?? {},
    });
}

export async function addTags(listId: string, email: string, tags: string[]) {
    const subscriberHash = mcHash(email);
    return mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
        tags: tags.map((name) => ({ name, status: "active" })),
    });
}
