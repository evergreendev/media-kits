// Web Crypto works in both Next.js middleware and the server runtime.
export const SESSION_MAX_AGE = 60 * 60 * 24 * 180;
export const sessionCookieOptions = {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
};

export type MediaKitSession = {
    contactId: string;
    firstName: string;
    lastName: string;
    email: string;
    organizationName: string;
};

async function sessionKey() {
    const secret = process.env.MEDIA_KIT_SESSION_SECRET;
    if (!secret || !/^[a-f0-9]{64}$/i.test(secret)) {
        throw new Error("Set MEDIA_KIT_SESSION_SECRET to a random 32-byte hex secret");
    }
    const bytes = Uint8Array.from(secret.match(/../g)!, value => parseInt(value, 16));
    return crypto.subtle.importKey("raw", bytes, "AES-GCM", false, ["encrypt", "decrypt"]);
}

function encode(bytes: Uint8Array) {
    return btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function decode(value: string) {
    return Uint8Array.from(atob(value.replaceAll("-", "+").replaceAll("_", "/")), char => char.charCodeAt(0));
}

export async function createMediaKitSession(session: MediaKitSession) {
    const key = await sessionKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const payload = new TextEncoder().encode(JSON.stringify({
        ...session, expiresAt: Date.now() + SESSION_MAX_AGE * 1000,
    }));
    if (payload.length > 2400) throw new Error("Media kit session exceeds cookie size limit");
    const encrypted = await crypto.subtle.encrypt({
        name: "AES-GCM", iv, additionalData: new TextEncoder().encode("media-kit-session-v2"),
    }, key, payload);
    return `v2.${encode(iv)}.${encode(new Uint8Array(encrypted))}`;
}

export async function readMediaKitSession(token?: string): Promise<MediaKitSession | null> {
    if (!token || token.length > 3500) return null;
    try {
        const [version, iv, ciphertext, extra] = token.split(".");
        if (version !== "v2" || !iv || !ciphertext || extra !== undefined) return null;
        const decrypted = await crypto.subtle.decrypt({
            name: "AES-GCM", iv: decode(iv),
            additionalData: new TextEncoder().encode("media-kit-session-v2"),
        }, await sessionKey(), decode(ciphertext));
        const data = JSON.parse(new TextDecoder().decode(decrypted));
        if (!Number.isFinite(data.expiresAt) || data.expiresAt <= Date.now()
            || typeof data.contactId !== "string" || !/^\d+$/.test(data.contactId)
            || ![data.firstName, data.lastName, data.email, data.organizationName]
                .every(value => typeof value === "string" && value.length <= 254)) return null;
        return data;
    } catch {
        return null;
    }
}
