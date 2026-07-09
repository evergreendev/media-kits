"use client"
import {updateMediaKitViewedForUser} from "@/app/components/ExpandableSection/actions";
import {useState} from "react";
import Form from "@/app/components/Form";

type Props = {
    tag: string;
};

export default function EarlyBirdCTA({tag}: Props) {
    const [hasClicked, setHasClicked] = useState(false);
    const [showForm, setShowForm] = useState(false);

    async function handleClick() {
        try {
            const result = await updateMediaKitViewedForUser(tag);
            if (result) {
                setHasClicked(true);
            } else {
                // No cookie or unable to tag on server — show fallback form to upsert and tag user
                setShowForm(true);
            }
        } catch {
            // If tagging fails for any reason, show the fallback form
            setShowForm(true);
        }
    }

    if (hasClicked) {
        return (
            <section id="signup" className="px-6 py-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center text-[#6f9488]">Thank you for being apart of <br className="hidden sm:block"/>Black Hills Bride 2026!</h2>
                    <div className="max-w-lg mx-auto p-6 bg-white text-black rounded-lg text-center">
                        <p className="text-slate-700 mb-4">
                            Someone from our team will contact you shortly.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (showForm) {
        // Reuse the existing Form to upsert the user and apply the tag. Disable auto redirects in this CTA context.
        return (
            <section id="signup" className="px-6 py-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <Form mediaKitPub={tag} autoRedirectOnCookie={false} autoRedirectOnSuccess={false} simple />
                </div>
            </section>
        );
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="inline-block cursor-pointer bg-white text-[#6f9488] hover:bg-green-50 font-semibold py-3 px-5 rounded-md shadow hover:shadow-md transition"
        >
            I&apos;m an early bird — sign me up
        </button>
    );
}
