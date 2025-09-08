import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  try {
    const url = new URL(req.url);
    const mc_eid = url.searchParams.get("mc_eid");

    if (mc_eid && process.env.MAILCHIMP_SERVER_PREFIX && process.env.MAILCHIMP_AUDIENCE_ID && process.env.MAILCHIMP_API_KEY) {
      const res = await fetch(
        `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members?unique_email_id=${mc_eid}&count=1`,
        { headers: { Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}` } }
      );
      if (res.ok) {
        const data = await res.json();
        const member = data?.members?.[0];
        if (member?.id) {
          // Redirect to same URL without mc_eid and set auth cookie
          const clean = new URL(url.toString());
          clean.searchParams.delete("mc_eid");
          const resp = NextResponse.redirect(clean);
          resp.cookies.set("em_uid", `v1:mc:${member.id}` , {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 180,
          });
          return resp;
        }
      }
    }
  } catch (e) {
    // ignore and continue
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};
