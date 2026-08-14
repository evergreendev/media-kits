import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const kits = [
    {
        title: "Black Hills Family",
        href: "/black-hills-family",
        image: "/media-kit/black-hills-family/visual-02.png",
        alt: "Black Hills Family Staycations cover",
        color: "#4e7f73",
        description: "Reach local women and families through five trusted issues each year."
    },
    {
        title: "Black Hills Visitor",
        href: "/black-hills-visitor",
        image: "/media-kit/black-hills-visitor/visual-04.png",
        alt: "Black Hills Visitor guide cover",
        color: "#17647a",
        description: "Put your business in the guide tourists and locals rely on."
    },
    {
        title: "Black Hills Bride",
        href: "/black-hills-bride",
        image: "/bride/bride-hero.png",
        alt: "Black Hills Bride publication",
        color: "#6f9488",
        description: "Connect with couples planning their biggest day in the Black Hills."
    },
    {
        title: "FACES of the Black Hills",
        href: "/faces",
        image: "/media-kit/faces-of-the-black-hills/visual-03.png",
        alt: "FACES of the Black Hills cover",
        color: "#4e5147",
        description: "Own an exclusive industry category in this premium annual publication."
    },
    {
        title: "Impact Magazine",
        href: "/impact-magazine",
        image: "/media-kit/impact-magazine/visual-02.png",
        alt: "Impact Magazine cover",
        color: "#dd3028",
        description: "Deliver local offers and coupons directly to 60,000 mailboxes."
    },
    {
        title: "Southern Hills Vacation Guide",
        href: "/southern-hills-vacation-guide",
        image: "/media-kit/southern-hills-vacation-guide/visual-03.png",
        alt: "Southern Hills Vacation Guide cover",
        color: "#df641f",
        description: "Meet visitors exploring Hot Springs, Keystone, Custer, and beyond."
    },
    {
        title: "Sturgis 57785",
        href: "/sturgis-57785",
        image: "/media-kit/sturgis-57785/visual-02.png",
        alt: "Sturgis 57785 magazine cover",
        color: "#75652c",
        description: "Celebrate the businesses, people, and year-round spirit of Sturgis."
    },
    {
        title: "Digital Evergreen",
        href: "/digital-evergreen",
        image: "/media-kit/digital-evergreen/visual-04.png",
        alt: "A business represented across digital channels",
        color: "#165d70",
        description: "Build a digital presence that gets found, earns trust, and brings in leads."
    },
];

export default function Home() {
    return <main className="min-h-screen bg-[#f4f7f1] text-slate-900">
        <header className="relative overflow-hidden bg-[#17382f] text-white">
            <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#79b83f]/20"/>
            <div className="absolute -bottom-56 -left-28 h-96 w-96 rounded-full border-[70px] border-white/5"/>
            <div className="relative mx-auto max-w-screen-xl px-5 py-14 sm:px-10 sm:py-20">
                <div className="rounded-2xl bg-white p-4 shadow-xl sm:w-fit"><Image src="/logo.jpg"
                                                                                    alt="Evergreen Media" width={2048}
                                                                                    height={526} priority
                                                                                    className="h-auto w-64 sm:w-96"/>
                </div>
                <div className="mt-12 max-w-3xl"><p
                    className="text-sm font-bold uppercase tracking-[.3em] text-[#9ed269]">2026 media kits</p><h1
                    className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Local audiences.<br/>Meaningful
                    connections.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">Explore
                    advertising opportunities across Evergreen Media’s trusted print publications and digital services
                    throughout the Black Hills.</p></div>
            </div>
        </header>

        <section className="mx-auto max-w-screen-xl px-5 py-14 sm:px-10 sm:py-20">
            <div className="max-w-2xl"><p className="font-bold uppercase tracking-[.25em] text-[#5b8d35]">Advertising
                opportunities</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">Find the right audience for your
                story.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Choose a media kit to see audience
                details, ad formats, rates, calendars, and digital packages.</p></div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{kits.map(kit => <Link href={kit.href}
                                                                                                   key={kit.href}
                                                                                                   className="group flex min-h-[31rem] flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b8d35]">
                <div className="relative h-64 overflow-hidden" style={{backgroundColor: `${kit.color}14`}}><Image
                    src={kit.image} alt={kit.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"/></div>
                <div className="h-2" style={{backgroundColor: kit.color}}/>
                <div className="flex flex-1 flex-col p-6"><h3
                    className="text-2xl font-black leading-tight">{kit.title}</h3><p
                    className="mt-3 leading-7 text-slate-600">{kit.description}</p><span
                    className="mt-auto flex items-center gap-2 pt-6 font-bold"
                    style={{color: kit.color}}>View media kit <ArrowRight
                    className="h-5 w-5 transition group-hover:translate-x-1"/></span></div>
            </Link>)}</div>
        </section>

        <footer className="bg-[#17382f] px-5 py-10 text-white">
            <div className="mx-auto flex max-w-screen-xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="text-xl font-black">EVERGREEN MEDIA</p><p className="mt-1 text-white/70">329 Main St.
                    Suite 1 · Rapid City, SD</p></div>
                <div className="sm:text-right"><Link className="font-bold hover:text-[#9ed269]"
                                                     href="https://evergreenmediarc.com">evergreenmediarc.com</Link><br/><Link
                    className="text-white/70 hover:text-white" href="tel:+16053437684">605.343.7684</Link></div>
            </div>
        </footer>
    </main>;
}
