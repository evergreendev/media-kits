This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Media kit sessions and Impact form prefill

Set `MEDIA_KIT_SESSION_SECRET` on the deployment to a random 32-byte hex string.
Generate one with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
Keep it server-only and stable across instances; rotating it invalidates existing sessions.
Local development uses the secret in the ignored `.env` file.

Signup still finds or creates a HubSpot contact. The `em_uid` cookie is now an
authenticated, encrypted AES-GCM session with HttpOnly, SameSite=Lax, and Secure in
production. It stores the visitor's submitted details, not retrieved CRM details.
Unsigned legacy cookies are rejected; visitors must sign up again for prefill.
Raw `hubspot_user_id` links still open the media kit but cannot establish identity
or mutate CRM records. They do not provide prefill; use signup for that flow.

Impact CTAs go through `/impact-magazine/reserve`, which verifies the cookie and
redirects to the fixed HubSpot share URL with `firstname`, `lastname`, `email`, and
company `name` query parameters. Invalid or absent sessions open the same form
without parameters. Redirects are not cached. The supplied details appear in the
destination URL and browser history, as required by HubSpot query-string prefill.
No HubSpot tracking script is needed for this flow.

Run `node scripts/test-media-kit-session.cjs` to check encryption, tampering,
expiration, legacy-cookie rejection, key rotation, and URL encoding.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
