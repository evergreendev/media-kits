import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import {readMediaKitSession} from "@/app/lib/mediaKitSession";
import {impactReservationUrl} from "@/app/lib/impactReservation";

export async function GET() {
    const session = await readMediaKitSession((await cookies()).get("em_uid")?.value);
    const response = NextResponse.redirect(impactReservationUrl(session), 303);
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("Referrer-Policy", "no-referrer");
    return response;
}
