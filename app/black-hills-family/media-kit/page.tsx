import ExpandableSection from "@/app/components/ExpandableSection";
import doubleSpread from "@/public/ad-sizes/double.png";
import fullPage from "@/public/ad-sizes/full.png";
import halfPageH from "@/public/ad-sizes/half-h.png";
import halfPageV from "@/public/ad-sizes/half-v.png";
import quarterPage from "@/public/ad-sizes/quarter.png";

import Image from "next/image";
import logo from "@/public/family/family-logo.webp";
import Highlight from "@/app/components/Highlight";
import egmLogo from "@/public/egm-white.png";
import blackHillsFamilyHeader from "@/public/family/covers.png";

import Link from "next/link";
import {Facebook, Mail, MonitorSmartphone} from "lucide-react";

const Page = () => {

    return <div className="max-w-screen-lg mx-auto w-full bg-white shadow-lg">
        <div className="p-4"><Image src={logo} alt="Black Hills Family" width={450} height={200}
                                    className={"mx-auto mb-6 max-w-screen-sm w-full sm:w-96"}
                                    priority={true}/>
            <div className="text-slate-900 max-w-prose mx-auto font-serif text-xl mb-4 space-y-3">
                <p>Our readers - local women aged 25-49 - control 85% of household spending (Forbes).</p>
                <p>Our readers values work/life balance, mental health, and self-care. They&apos;re seeking products and
                    services that align with their needs and values, and they trust local resources like Black Hills
                    Family.</p>
                <p>89% of this valuable demographic engages with printed magazine media (Conde Nast).</p>
                <p>She is the Chief Purchasing Officer in her household.</p>
                <p>Combine that engagement with over 3,000 website views per month, 8,000+ Facebook followers, and
                    3,000+ email subscribers, Black Hills Family offers unmatched access to this market.</p>
                <p>If your business wants to help shape the purchasing decisions of this financially influential groups,
                    Black Hills Family is the partner you&apos;ve been waiting for.</p>
            </div>
            <Image alt="" className="m-auto mb-4" src={blackHillsFamilyHeader}/>

            <div
                className={"flex p-5 flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 bg-[#6f9488] text-white"}>
                <Highlight text1={"5X"} text2={"Issues Annually"}/>
                <Highlight text1={"60K"} text2={"Copies Printed Annually"}/>
                <Highlight text1={"400+"} text2={"Strategic Locations"}/>
            </div>

            <div className="items-start p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-slate-900">
                <div className="flex flex-col items-center gap-4">
                    <ExpandableSection
                        leftAlign
                        description={
                            <>
                                <p>Premium placement for high-visibility brand positioning.</p>
                            </>
                        }
                        title="Cover Positions" price={<ul className="list-disc list-inside space-y-2">
                        <li>Inside Front Cover: $1,610</li>
                        <li>Inside Back Cover: $1,610</li>
                        <li>Back Cover: $1,610</li>
                    </ul>} tag="Full Page"/>

                    <ExpandableSection
                        leftAlign
                        description={
                            <>
                                <p>Tell your story with sponsored editorial content crafted for Black Hills Family
                                    readers.</p>
                            </>
                        }
                        title="Advertorial" price="$1,500" tag="Advertorial"/>

                    <ExpandableSection
                        leftAlign
                        description={
                            <>
                                <p>Place your message directly inside the magazine.</p>
                            </>
                        }
                        title="Insert" price="Call for Details" tag="Insert"/>
                    <ExpandableSection icon={doubleSpread} title="Two Page Spread"
                                       price={
                                           <>
                                               <p>$1,900 2 Page Advertorial</p>
                                               <p className="text-base font-normal">Bleed: 17&quot; x 11.125&quot;</p>
                                               <p className="text-base font-normal">Trim: 16.75&quot; x 10.875&quot;</p>
                                           </>

                                       }
                                       description={
                                           <>
                                               <p>Bleed: 17&quot; x 11.125&quot;</p>
                                               <p>Trim: 16.75&quot; x 10.875&quot;</p>
                                           </>
                                       }
                                       tag="2 Page Advertorial"/>

                    <ExpandableSection icon={fullPage} title="Full Page"
                                       price={
                                           <>
                                               $1,400
                                           </>
                                       }
                                       description={<>
                                           <p>Float: 7&quot; x 9.49&quot;</p>
                                           <p>Bleed: 8.625&quot; x 11.125&quot;</p>
                                           <p>Trim: 8.375&quot; x 10.875&quot;</p>
                                       </>}
                                       tag="Full Page"/>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <ExpandableSection icon={halfPageH} title="Half Page H" price={
                        <>
                            $950
                        </>
                    } description={<>

                        <p>Horizontal</p>
                        <p>7&quot; x 4.67&quot;</p>
                    </>}
                                       tag="Half Page H"/>
                    <ExpandableSection icon={halfPageV} title="Half Page V" price={
                        <>
                            $950
                        </>
                    } description={<>
                        <p>Vertical</p>
                        <p>3.32&quot; x 9.5&quot;</p>
                    </>}
                                       tag="Half Page V"/>
                    <ExpandableSection icon={quarterPage} title="Quarter Page" price="$650"
                                       description={
                                           <>
                                               <p>3.32&quot; x 4.67&quot;</p>
                                           </>}
                                       tag="Quarter Page"/>
                </div>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-slate-900">
                    <div>
                        <h2 className="text-3xl mb-4 text-slate-950">
                            Issues Calendar
                        </h2>
                        <h3 className="text-[#6f9488] text-xl">Staycations, Camps & Family Adventures</h3>
                        <p className="mb-4"><span className="font-bold">Distributing in March</span><br/>
                            Families are dreaming about summer-make sure you&apos;re part of their plans.</p>

                        <h3 className="text-[#6f9488] text-xl">The Military Issue</h3>
                        <p className="mb-4"><span className="font-bold">Distributing in June</span><br/>
                            Join us in honoring and supporting the incredible military families of the Black Hills.</p>

                        <h3 className="text-[#6f9488] text-xl">Education & Back To School</h3>
                        <p className="mb-4"><span className="font-bold">Distributing in August</span><br/>
                            As families gear up for a new school year, show them you&apos;re ready to support every step.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[#6f9488] text-xl">Holidays</h3>
                        <p className="mb-4"><span className="font-bold">Distributing in October</span><br/>
                            Families rely on this issue for holiday activities, shopping, and seasonal planning.</p>

                        <h3 className="text-[#6f9488] text-xl">Wellness</h3>
                        <p className="mb-4"><span className="font-bold">Distributing in January 2027</span><br/>
                            Readers are focused on fitness, mental health, and self-care. Position your business as part of
                            their wellness journey.</p>

                        <h3 className="text-[#6f9488] text-xl">Additional Reach</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>41,000 annual page views</li>
                            <li>3,700 direct mail households</li>
                            <li>3,000+ website views per month</li>
                            <li>8,000+ Facebook followers</li>
                            <li>3,000+ email subscribers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div
            className="flex p-5 flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-8 bg-[#6f9488] text-white">
            <div className="text-white flex flex-col items-center sm:flex-row justify-start mt-8 gap-4 sm:gap-8 mb-8">
                <div>
                    <Image className="w-70" src={egmLogo} alt="Evergreen Media"/>
                </div>
            </div>
            <div>
                <Highlight text1="30K" text2="Readers Per Issue"/>
            </div>
            <div className="text-2xl">
                <p className="font-bold">For Rates<br/>
                    Dates & Deadlines:</p>
                <div className="text-xl">
                    <p>Rick</p>
                    <Link href="mailto:Rick@egmrc.com">Rick@egmrc.com</Link>
                    <br/>
                    <Link href="tel:+16053437684,203">605-343-7684 Ext. 203</Link>
                    <p>329 Main St. Suite 1</p>
                    <p>Rapid City, SD</p>
                </div>
            </div>
        </div>
    </div>
}


export default Page;
