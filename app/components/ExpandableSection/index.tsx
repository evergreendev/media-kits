"use client"
import {useState, ReactNode} from "react";
import {StaticImageData} from "next/image";
import {LucideSquareChevronDown} from "lucide-react";
import {tagUser} from "./actions";
import Image from "next/image";

type Props = {
    title: string,
    description?: ReactNode,
    price: ReactNode,
    tag: string,
    icon?: StaticImageData,
}

const ExpandableSection = ({title, description, price, icon, tag}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return <form>
        <button
            formAction={async () => {
                await tagUser(tag)
            }}
            className="text-center cursor-pointer text-slate-900 flex items-center gap-5 bg-white p-4 w-80 sm:w-96"
            onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex flex-col items-center mx-auto w-full">
                {
                    icon &&
                    <div className="mb-6 w-full flex justify-center">
                        <div className="h-40 w-full max-w-xs relative">
                            <Image src={icon} alt="Icon" fill className="object-contain" priority={true}/>
                        </div>
                    </div>
                }
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center">

                        <h2 className="text-xl font-bold">{title}</h2>
                        <div>
                            {description}
                        </div>
                        <p className="text-gray-400">(view price)</p>

                    </div>
                    {
                        isExpanded ? <LucideSquareChevronDown/> : <LucideSquareChevronDown className="-rotate-90"/>
                    }
                </div>
                <div className={`${isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"} transition-all duration-300 w-full`}>
                    <div className="w-full h-px bg-slate-300 my-4"/>

                    <div className="text-lg font-bold">{price}</div>
                </div>
            </div>
        </button>
    </form>
}

export default ExpandableSection
