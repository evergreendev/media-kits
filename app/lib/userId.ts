export type Vendor = "mc"
export type Uid = { version: "v1"; vendor: Vendor; id: string };

export function encodeUid(uid: Uid) { return `${uid.version}:${uid.vendor}:${uid.id}`; }

export function decodeUid(encodedUid: string): Uid|null {
    const [version, vendor, id] = encodedUid.split(":");
    if (version !== "v1" || !["mc"].includes(vendor)) return null;

    return {version: version, vendor: vendor as Vendor, id: id}
}
