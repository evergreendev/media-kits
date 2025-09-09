import ExpandableSection from "@/app/components/ExpandableSection";
import doubleSpread from "@/public/double-spread.png";
import fullPage from "@/public/full-page.png"
import Image from "next/image";
import logo from "@/public/faces-logo.png"
import facesCover from "@/public/faces-cover.png";
import facesStory from "@/public/faces-story.jpeg";
import Highlight from "@/app/components/Highlight";
import aspenFaces from "@/public/faces/aspen-faces.jpeg";
import chFaces from "@/public/faces/ch-faces.jpeg";
import swFaces from "@/public/faces/sw-faces.png";
import egmLogo from "@/public/logo.jpg"
import Link from "next/link";

const Page = () => {

    return <div className="p-4 max-w-screen-lg mx-auto w-full bg-white shadow-lg">
        <Image src={logo} alt="Logo" width={200} height={200} className={"mx-auto mb-6 w-full max-w-screen-sm"}
               priority={true}/>
        <div className="mx-auto mb-8 flex w-full max-w-3xl items-center justify-center gap-4 sm:gap-6">
            <div className="relative">
                <Image
                    src={facesStory}
                    alt="Faces story preview"
                    className="h-auto w-44 sm:w-56 md:w-96 -rotate-1 shadow-xl"
                    placeholder="empty"
                />
            </div>
            <div className="relative -ml-6 sm:-ml-8">
                <Image
                    src={facesCover}
                    alt="Faces cover"
                    className="h-auto w-48 sm:w-48 md:w-52 -rotate-6 shadow-2xl"
                    placeholder="empty"
                />
            </div>
        </div>
        <div className={"flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8"}>
            <Highlight text1={"14K"} text2={"High-Income Households Mailed"}/>
            <Highlight text1={"20K"} text2={"Copies Printed Annually"}/>
            <Highlight text1={"4K+"} text2={"Businesses Mailed"}/>
        </div>
        <p className="text-slate-900 max-w-prose mx-auto font-serif text-xl mb-4">This annual publication will serve to
            connect the Black Hills
            community with local industry experts. <span className="font-bold italic">Exclusive</span> is the key word
            in this magazine. Only <span className="font-bold italic">one</span> face is featured per industry category.
            There are countless stories to tell in the Black Hills. This region is
            truly a wonderful place to live and do business. From scenic views
            and outdoor fun, the Black Hills are a haven. But the real magic
            of the Hills is the people.</p>
        <div className="flex flex-wrap justify-center my-8">
            <ExpandableSection icon={doubleSpread} title="Double Page Spread" price="$4,000"
                               description={`16.75" x 10.75"`} tag="double-page-spread"/>
            <ExpandableSection icon={fullPage} title="Full Page" price="$2,500" description={`8.375" x 10.75"`}
                               tag="full-page"/>
        </div>
        <div className="mt-10">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 items-center">
                <div className="relative -mx-4 w-70">
                    <Image src={aspenFaces} alt="" className="w-full h-auto" placeholder="empty"/>
                </div>
                <div className="relative -mx-12 w-96">
                    <Image src={chFaces} alt="" className="w-full h-auto" placeholder="empty"/>
                </div>
                <div className="relative -ml-2">
                    <Image src={swFaces} alt="" className="w-full h-auto" placeholder="empty"/>
                </div>
            </div>
        </div>
        <h2 className="font-bold text-2xl mb-2 text-center text-slate-900">Real PHOTOS. Real STORIES. All YOU.</h2>
        <p className="text-slate-900 max-w-prose mx-auto font-serif text-xl mb-4">
            Once you’ve secured your category, it’s time to
            conveniently book a time with our editorial team.
            We’ll come to you — wherever you’d like — to snap
            your portrait and chat about your story. Then we’ll
            work together to shape your feature into the perfect
            FACES of the Black Hills entry.
        </p>

        <div className="flex justify-between items-center">
            <div className="flex flex-col items-center sm:flex-row justify-start mt-8 gap-4 sm:gap-8 mb-8">
                <div className="text-slate-900">
                    <Image className="w-54" src={egmLogo} alt="Evergreen Media"/>
                    <p>329 Main St. Suite 1</p>
                    <p>Rapid City, SD</p>
                    <p><Link href="https://evergreenmediarc.com" target="_blank" rel="noopener noreferrer"
                    >evergreenmediarc.com</Link></p>
                </div>
                <div className="hidden sm:block w-1 h-32 bg-black"></div>
                <Highlight text1={"500K+"} text2={"Annual Readership"}/>
            </div>
            <div className="text-slate-900 text-2xl">
                <p className="font-bold">FOR MORE<br/>
                    INFORMATION:</p>
                <div>
                    <Link href="mailto:Rick@egmrc.com" className="text-black">Rick | Rick@egmrc.com</Link>
                </div>

                <Link href="tel:+16053437684,203" className="text-black">605.343.7684 Ext. 203</Link>
            </div>
        </div>



    </div>
}


export default Page;
