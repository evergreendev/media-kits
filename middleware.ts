import {NextRequest, NextResponse} from "next/server";

const MEDIA_KIT_PATHS = new Set([
    "black-hills-family",
    "black-hills-bride",
    "faces",
    "black-hills-visitor",
    "impact-magazine",
    "southern-hills-vacation-guide",
    "sturgis-57785",
    "digital-evergreen",
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

    // A raw contact ID is not proof of identity. Preserve the media kit
    // destination, but never mint a session or mutate CRM data from this URL.
    const res = NextResponse.redirect(redirectUrl);
    res.headers.set("Cache-Control", "private, no-store");
    res.headers.set("Referrer-Policy", "no-referrer");
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
        "/black-hills-visitor",
        "/black-hills-visitor/media-kit",
        "/impact-magazine",
        "/impact-magazine/media-kit",
        "/southern-hills-vacation-guide",
        "/southern-hills-vacation-guide/media-kit",
        "/sturgis-57785",
        "/sturgis-57785/media-kit",
        "/digital-evergreen",
        "/digital-evergreen/media-kit",
    ],
};
