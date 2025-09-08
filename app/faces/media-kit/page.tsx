import ExpandableSection from "@/app/components/ExpandableSection";
import doubleSpread from "@/public/double-spread.png";
import fullPage from "@/public/full-page.png"
import Image from "next/image";
import logo from "@/public/faces-logo.png"
import facesCover from "@/public/faces-cover.png";
import facesStory from "@/public/faces-story.jpeg";

const Page = () => {

    return <div className="p-4 max-w-screen-lg mx-auto w-full bg-white">
        <Image src={logo} alt="Logo" width={200} height={200} className={"mx-auto mb-6 w-full max-w-screen-sm"} priority={true}/>
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
        <p className="text-slate-900 max-w-prose mx-auto font-serif text-lg mb-4">This annual publication will serve to connect the Black Hills
            community with local industry experts. <span className="font-bold italic">Exclusive</span> is the key word
            in this magazine. Only <span className="font-bold italic">one</span> face is featured per industry category.
            There are countless stories to tell in the Black Hills. This region is
            truly a wonderful place to live and do business. From scenic views
            and outdoor fun, the Black Hills are a haven. But the real magic
            of the Hills is the people.</p>
        <div className="flex flex-wrap justify-center my-8">
            <ExpandableSection icon={doubleSpread} title="Double Page Spread" price="$4,000" description={`16.75" x 10.75"`} tag="double-page-spread"/>
            <ExpandableSection icon={fullPage} title="Full Page" price="$2,500" description={`8.375" x 10.75"`} tag="full-page"/>
        </div>
        <h2 className="font-bold text-lg text-center text-slate-900">Real PHOTOS. Real STORIES. All YOU.</h2>
        <p className="text-slate-900 max-w-prose mx-auto font-serif text-lg mb-4">
            Once you’ve secured your category, it’s time to
            conveniently book a time with our editorial team.
            We’ll come to you — wherever you’d like — to snap
            your portrait and chat about your story. Then we’ll
            work together to shape your feature into the perfect
            FACES of the Black Hills entry.
        </p>

    </div>
}


export default Page;
