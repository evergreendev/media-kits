import {NextRequest, NextResponse} from "next/server";
import {encodeUid} from "@/app/lib/userId";
import {updateContactMediaKitViewed} from "@/app/lib/hubspot";

const MEDIA_KIT_PATHS = new Set([
    "black-hills-family",
    "black-hills-bride",
    "faces",
]);

export async function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hubSpotUserId = url.searchParams.get("hubspot_user_id")?.trim();

    if (!hubSpotUserId) {
        return NextResponse.next();
    }

    const [, publication, subPath] = url.pathname.split("/");

    if (!MEDIA_KIT_PATHS.has(publication)) {
        return NextResponse.next();
    }

    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = `/${publication}/media-kit`;
    redirectUrl.searchParams.delete("hubspot_user_id");

    if (subPath && subPath !== "media-kit") {
        return NextResponse.next();
    }

    try {
        await updateContactMediaKitViewed(hubSpotUserId, publication);
    } catch (e) {
        console.error("Failed to update HubSpot media_kit_viewed from URL param", e);
    }

    const res = NextResponse.redirect(redirectUrl);
    res.cookies.set("em_uid", encodeUid({version: "v1", vendor: "hs", id: hubSpotUserId}), {
        httpOnly: false,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 180,
    });

    return res;
}

export const config = {
    matcher: [
        "/black-hills-family",
        "/black-hills-family/media-kit",
        "/black-hills-bride",
        "/black-hills-bride/media-kit",
        "/faces",
        "/faces/media-kit",
    ],
};
