'use server'

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { addTags, upsertMember, mcHash } from '@/app/lib/mailchimp';
import { encodeUid } from '@/app/lib/userId';

// tiny timeout wrapper for any external call
async function withTimeout<T>(p: Promise<T>, ms = 8000): Promise<T> {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms);
    try {
        return await p;
    } finally {
        clearTimeout(t);
    }
}

export async function subscribe(_prevState: boolean, formData: FormData) {
    const firstName = (formData.get('firstName') as string) || '';
    const lastName  = (formData.get('lastName') as string) || '';
    const email     = (formData.get('email') as string) || '';
    const mediaKitPub = (formData.get('mediaKitPub') as string) || '';

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!audienceId || !email) return false;

    // 1) Upsert fast (idempotent)
    await withTimeout(
        upsertMember(audienceId, email, { FNAME: firstName, LNAME: lastName }),
        8000
    );

    // 2) Set cookie (httpOnly; the server checks it)
    try {
        const hash = mcHash(email);
        const encoded = encodeUid({ version: 'v1', vendor: 'mc', id: hash });
        const maxAge = 60 * 60 * 24 * 180; // 180 days

        (await cookies()).set('em_uid', encoded, {
            httpOnly: true,                 // ← safer; gate checks this server-side
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge,
        });
    } catch (e) {
        console.error('Failed to set em_uid cookie', e);
        // non-fatal
    }
    
    if (mediaKitPub) {
        const hash = mcHash(email);
        // Fire-and-forget to avoid holding the response
        addTags(audienceId, hash, [mediaKitPub]).catch(err =>
            console.error('addTags failed', err)
        );
    }

    // 4) Redirect immediately
    const dest = mediaKitPub ? `/${mediaKitPub}/media-kit` : '/';
    redirect(dest); // throws to end the action
}
