import Link from "next/link";
import {StaticImageData} from "next/image";
import Image from "next/image";

type Props = {
    mediaKitUrl: string,
    logo?: StaticImageData
}
const Form = ({mediaKitUrl, logo}: Props) => {

    return (
        <div className="max-w-lg mx-auto p-6 bg-white text-black rounded-lg shadow-md">
            {
                logo && <Image src={logo} alt="Logo" width={200} height={200} className={"mx-auto mb-6"} priority={true} />
            }
            <h1 className="text-4xl font-bold mb-4 text-center">Advertising & Special Offers - Media Kit Access</h1>
            <p className="text-gray-600 mb-8">Fill out your info below to see ad sizes, pricing, and seasonal
                packages.</p>

            <form className="space-y-4 mb-6">
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
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Get Access
                </button>
            </form>

            <Link href={mediaKitUrl} className="text-sm text-gray-500 hover:text-gray-700">
                Just show me the media kit →
            </Link>
        </div>
    )
}

export default Form;
