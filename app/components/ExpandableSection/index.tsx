"use client"
import {useState} from "react";
import {StaticImageData} from "next/image";
import {LucideSquareChevronDown} from "lucide-react";
import {tagUser} from "./actions";
import Image from "next/image";

type Props = {
    title: string,
    description?: string,
    price: string,
    icon?: StaticImageData,
}

const ExpandableSection = ({title, description, price, icon}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return <form>
        <button
            formAction={async () => {
                await tagUser("test")
            }}
            className="text-center text-slate-900 flex items-center gap-5 bg-white p-4 border border-[#75b543]"
            onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex flex-col items-center">
                {
                    icon &&
                    <Image src={icon} alt="Icon" width={150} height={150} className={"mx-auto mb-6"} priority={true}/>
                }
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center">

                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-gray-400">(learn more)</p>
                    </div>
                    {
                        isExpanded ? <LucideSquareChevronDown/> : <LucideSquareChevronDown className="-rotate-90"/>
                    }
                </div>
                <div className={`${isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"} transition-all duration-300`}>
                    <div className="w-full h-px bg-slate-300 my-4"/>
                    {
                        description && <p>{description}</p>
                    }
                    <p className="text-lg font-bold">{price}</p>
                </div>
            </div>
        </button>
    </form>
}

export default ExpandableSection
