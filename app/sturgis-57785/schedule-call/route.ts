import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import {readMediaKitSession} from "@/app/lib/mediaKitSession";
import {hubspotFormUrl} from "@/app/lib/hubspotFormUrl";

const FORM_URL = "https://bp8pl.share-na2.hsforms.com/2lwUdivD1QzaFN7pdVqXfzQ";

export async function GET() {
    const session = await readMediaKitSession((await cookies()).get("em_uid")?.value);
    const response = NextResponse.redirect(hubspotFormUrl(FORM_URL, session), 303);
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
    return response;
}
