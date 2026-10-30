"use client";

import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import {MEDIA_KIT_VIEWED_OPTIONS} from "@/app/lib/hubspot";
import {updateMediaKitViewedForUser} from "./ExpandableSection/actions";

export default function MediaKitSourceTracker() {
    const pathname = usePathname();
    const source = useSearchParams().get("source")?.trim();
    useEffect(() => {
        const [, publication, page] = pathname.split("/");
        if (page === "media-kit" && Object.hasOwn(MEDIA_KIT_VIEWED_OPTIONS, publication) && source) {
            void updateMediaKitViewedForUser(publication, source).catch(() => {});
        }
    }, [pathname, source]);
    return null;
}
