import ExpandableSection from "@/app/components/ExpandableSection";
import doubleSpread from "@/public/bride/bride-double.png";
import fullPage from "@/public/bride/bride-full.png";
import halfPageH from "@/public/bride/bride-half-h.png";
import halfPageV from "@/public/bride/bride-half-v.png";

import Image from "next/image";
import logo from "@/public/bride/bride-logo.png"
import brideHero from "@/public/bride/bride-hero.png";
import Highlight from "@/app/components/Highlight";
import egmLogo from "@/public/egm-white.png"
import pinterest from "@/public/bride/pinterest.png"
import issuuLogo from "@/public/issuu-logo.png";
import pageViews from "@/public/bride/bhb-page-view.png";
import spotlight from "@/public/bride/spotlight.png";
import Link from "next/link";
import {Facebook, Instagram} from "lucide-react";

const Page = () => {

    return <div className="max-w-screen-lg mx-auto w-full bg-white shadow-lg">
        <div className="p-4"><Image src={logo} alt="Logo" width={450} height={200}
                                    className={"mx-auto mb-6 max-w-screen-sm"}
                                    priority={true}/>
            <p className="text-slate-900 max-w-prose mx-auto font-serif text-xl mb-4">Weddings are the biggest day of a
                couple’s life. With all the options available and planning involved, couples can quickly become
                overwhelmed.
                Black Hills Bride is the region’s #1 wedding resource. We’re 100% local, and couples rely on us for
                inspiration, tried-and-true advice, and the best local vendors in the industry. Teaming up with us means
                your business is showcased to hundreds of couples planning their big day in the Black Hills every
                year.</p>
            <div className="mx-auto mb-8 flex w-full max-w-3xl items-center justify-center gap-4 sm:gap-6">
                <div className="relative">
                    <Image
                        src={brideHero}
                        alt=""
                        className=""
                        placeholder="empty"
                    />
                </div>
            </div>
            <div className="text-gray-600 text-center grid grid-cols-1 sm:grid-cols-[1fr_2fr_3fr] gap-4 sm:gap-2 ">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex items-center justify-center">
                        <div className="w-20">
                            <h3 className="font-bold text-2xl">9.2K</h3>
                            <p>views</p>
                        </div>
                        <Image className="w-12" src={issuuLogo} alt=""/>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-20">
                            <h3 className="font-bold text-2xl">3.1K</h3>
                            <p>followers</p>
                        </div>
                        <div className="bg-[#6f9488] rounded-full p-2">
                            <Facebook className="w-8 h-8 text-white"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-20">
                            <h3 className="font-bold text-2xl">1.3K</h3>
                            <p>followers</p>
                        </div>
                        <div className="bg-[#6f9488] rounded-full p-2">
                            <Instagram className="w-8 h-8 text-white"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-20">
                            <h3 className="font-bold text-2xl">920</h3>
                            <p>followers</p>
                        </div>
                        <Image className="w-12" src={pinterest} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col text-slate-900 text-left justify-between">
                    <div>
                        <h3 className="text-[#6f9488] text-lg">Current Issue Online</h3>
                        <p>
                            Over 9k views of the current issue online, with hundreds of Ad Clicks (between 150-800/yr)
                            directly to your website.
                        </p>
                    </div>
                    <h3 className="text-[#6f9488] text-3xl">
                        Stay<br/>
                        Connected!
                    </h3>
                </div>

                <Image src={pageViews} alt="41K Page Views"/>
            </div>
        </div>

        <div
            className={"flex p-5 flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 bg-[#6f9488] text-white"}>
            <Highlight text1={"250+"} text2={"Distribution Locations"}/>
            <Highlight text1={"5K"} text2={"Copies Printed Annually"}/>
            <Highlight text1={"750+"} text2={"Bridal Show Distribution"}/>
        </div>

        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-slate-900">
                <div>
                    <h2 className="text-3xl mb-4 text-slate-950">
                        Professional Spotlight
                    </h2>
                    <h3 className="text-[#6f9488] text-xl">Vendor Profile</h3>
                    <p className="mb-4">
                        Tell your story through sponsored editorial content that is crafted for your business. Pro
                        Spotlights help our readers make decisions on their wedding vendors by putting a face to the
                        name.
                    </p>
                    <h3 className="text-[#6f9488] text-xl">
                        Professional Spotlight includes:
                    </h3>


                    <ul className="list-disc list-inside space-y-2">
                        <li>A full page feature article that tells your story through
                            photography, design and words. Up to 250 words. One
                            primary image of you and/or your business.
                        </li>

                        <li>URL and/or QR code linked to your website.</li>

                        <li>Complete business contact information.</li>

                        <li>A featured blog article. The ability to
                            share your Pro Spotlight digitally through
                            the Black Hills Bride Blog at no additional
                            cost. (a $200 value)
                        </li>

                        <li>Add an additional print ad of your
                            choice of size at a 50% discount.
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="mb-4">Publish your company name and website in our Black Hills Bride Vendor Directory.
                        Add your business
                        name, contact information, category listing, website link, and your logo or product image
                        to <Link href="https://BlackHillsBride.com/vendors">BlackHillsBride.com/vendors</Link>
                    </p>
                    <h3 className="text-[#6f9488] text-xl">Premium Website Listing</h3>
                    <p>
                        Let us connect you directly to our community through your Premium Vendor Listing. This package
                        adds
                        the ability to customize your listing in several ways.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Top of page category listing with “Featured” Badge</li>
                        <li>Logo and up to five images</li>
                        <li>Google Map</li>
                        <li>Company description up to 250 words</li>
                        <li>Newsletter OR Social Media feature</li>
                        <li>Email link</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap justify-center my-8">
            <ExpandableSection icon={doubleSpread} title="Double Page Spread" price="$2,275"
                               description={
                                   <>
                                       <p>Bleed 6”w x 9.25”h</p>
                                       <p>Float 5”w x 8”h</p>
                                   </>}
                               tag="double-page-spread"/>

            <ExpandableSection icon={fullPage} title="Full Page" price="$1,230" description={<>
                <p>Bleed 6”w x 9.25”h</p>
                <p>Float 5”w x 8”h</p>
            </>}
                               tag="full-page"/>
            <ExpandableSection icon={halfPageH} title="Half Page H" price="$845" description={<>
                <p>Horizontal</p>
                <p>4.87”w x 3.97”h</p>
            </>}
                               tag="half-page"/>
            <ExpandableSection icon={halfPageV} title="Half Page H" price="$845" description={<>
                <p>Vertical</p>
                <p>2.35”w x 8.04”h</p>
            </>}
                               tag="half-page"/>
            <ExpandableSection icon={spotlight} title="Professional Spotlight" price="$1,485"
                               description={
                                   <>
                                       <p>Let them see you in your best light!</p>
                                   </>}
                               tag="professional-spotlight"/>
        </div>

        <div className="flex p-5 flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-8 bg-[#6f9488] text-white">
            <div className="text-white flex flex-col items-center sm:flex-row justify-start mt-8 gap-4 sm:gap-8 mb-8">
                <div>
                    <Image className="w-70" src={egmLogo} alt="Evergreen Media"/>
                </div>
            </div>
            <div className="text-2xl">
                <p className="font-bold">For Rates<br/>
                    Dates & Deadlines:</p>
                <div className="text-xl">
                    <Link href="mailto:marek@egrmc.com">marek@egmrc.com | </Link>
                    <Link href="tel:+16053437684" >605.343.7684</Link>
                    <p>329 Main St. Suite 1., Rapid City</p>
                </div>



            </div>
        </div>


    </div>
}


export default Page;
