"use client"
import Link from "next/link";
import {StaticImageData} from "next/image";
import Image from "next/image";
import { subscribe } from "./actions";
import {useActionState, useEffect} from "react";
import { useRouter } from "next/navigation";


type Props = {
    mediaKitPub: string,
    logo?: StaticImageData
}
const Form = ({mediaKitPub, logo}: Props) => {
    const [state, action, pending] = useActionState(subscribe, false)
    const router = useRouter();

    // If em_uid cookie exists on the client, redirect user straight to the media kit
    useEffect(() => {
        try {
            const match = document.cookie.match(/(?:^|; )em_uid=([^;]+)/);
            if (match && match[1]) {
                router.replace(`/${mediaKitPub}/media-kit`);
            }
        } catch (e) {
            // silently ignore
        }
    }, [mediaKitPub, router]);

    
    useEffect(() => {
        if (state){
            router.replace(`/${mediaKitPub}/media-kit`);
        }
    },[mediaKitPub, router, state])

    return (
        <div className="max-w-lg mx-auto p-6 bg-white text-black rounded-lg shadow-md">
            {
                logo && <Image src={logo} alt="Logo" width={200} height={200} className={"mx-auto mb-6"} priority={true} />
            }
            <h1 className="text-4xl font-bold mb-4 text-center">Advertising & Special Offers - Media Kit Access</h1>
            <p className="text-gray-600 mb-8">Fill out your info below to see ad sizes, pricing, and seasonal
                packages.</p>

            <form className="space-y-4 mb-6" action={action}>
                <div>
                    <label htmlFor="firstName" className="text-sm">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                    <label htmlFor="lastName" className="text-sm">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <input type="hidden" name="mediaKitPub" value={mediaKitPub}/>
                <button
                    type="submit"
                    disabled={pending}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                    {pending ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        'Get Access'
                    )}
                </button>
            </form>

            <Link href={`/${mediaKitPub}/media-kit`} className="text-sm text-gray-500 hover:text-gray-700">
                Just show me the media kit →
            </Link>
        </div>
    )
}

export default Form;
