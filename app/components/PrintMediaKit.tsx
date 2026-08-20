import Image from "next/image";
import Link from "next/link";
import ExpandableSection from "@/app/components/ExpandableSection";
import doublePageIcon from "@/public/ad-sizes/double.png";
import fullPageIcon from "@/public/ad-sizes/full.png";
import halfPageHIcon from "@/public/ad-sizes/half-h.png";
import halfPageVIcon from "@/public/ad-sizes/half-v.png";
import quarterPageIcon from "@/public/ad-sizes/quarter.png";
import {ReactNode} from "react";

export type PrintKit = {
    title: string; kicker?: string; intro: string; slug: string; color: string;
    stats: [string, string][]; hero: { src: string; alt: string }[];
    formats: { name: string; dimensions: string; price?: ReactNode; key?: string }[];
    sections?: { title: string; items: { heading: string; body: string }[] }[];
    table?: { headers: string[]; rows: string[][] };
    note?: string; online?: string; website: string;
};

const optionKey = (value: string) => value.toLowerCase()
    .replace("horizontal", "h").replace("vertical", "v")
    .replace("half", "1/2").replace("quarter", "1/4")
    .replace(/[^a-z0-9]/g, "");

const adIcon = (name: string) => {
    const normalized = name.toLowerCase();
    if (normalized.includes("spread") || normalized.includes("gatefold")) return doublePageIcon;
    if (normalized.includes("1/2") || normalized.includes("half")) {
        return normalized.includes(" v") || normalized.includes("vertical") ? halfPageVIcon : halfPageHIcon;
    }
    if (normalized.includes("1/4") || normalized.includes("quarter")) return quarterPageIcon;
    if (normalized.includes("full") || normalized.includes("cover") || normalized.includes("advertorial")) return fullPageIcon;
    return undefined;
};

export default function PrintMediaKit({kit}: { kit: PrintKit }) {
    const matchingRate = (name: string) => kit.table?.rows.find(row => optionKey(row[0]) === optionKey(name));
    const rateDetails = (row: string[]) => <div className="space-y-1">{row.slice(1).map((value, valueIndex) => <p
        key={`${value}-${valueIndex}`}>
        <span className="font-normal">{kit.table?.headers[valueIndex + 1]}: </span>{value}
    </p>)}</div>;
    const additionalOptions = kit.table?.rows.filter(row => !kit.formats.some(format => optionKey(format.name) === optionKey(row[0]))) ?? [];

    return <main className="mx-auto w-full max-w-screen-lg overflow-hidden bg-white text-slate-900 shadow-xl">
        <header className="px-5 py-12 text-center sm:px-10" style={{backgroundColor: `${kit.color}12`}}>
            {kit.kicker && <p className="mb-2 text-sm font-bold uppercase tracking-[.28em]"
                              style={{color: kit.color}}>{kit.kicker}</p>}
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl" style={{color: kit.color}}>{kit.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-left font-serif text-lg leading-8 sm:text-xl">{kit.intro}</p>
            <div
                className={`mx-auto mt-8 grid max-w-4xl gap-5 ${kit.hero.length > 1 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"}`}>
                {kit.hero.map((image, i) => <Image key={image.src} src={image.src} alt={image.alt} width={900}
                                                   height={1100}
                                                   priority={i === 0}
                                                   className="h-72 w-full object-contain drop-shadow-xl sm:h-96"/>)}
            </div>
        </header>
        <section className="grid gap-6 px-6 py-8 text-center text-white sm:grid-cols-3"
                 style={{backgroundColor: kit.color}}>
            {kit.stats.map(([value, label]) => <div key={label}><p
                className="text-4xl font-black sm:text-5xl">{value}</p><p
                className="mt-1 font-bold uppercase tracking-wide">{label}</p></div>)}
        </section>
        <section className="px-5 py-12 sm:px-10">
            <h2 className="text-3xl font-black" style={{color: kit.color}}>Advertising formats &amp; rates</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {kit.formats.map(format => {
                    const rate = matchingRate(format.name);
                    return <ExpandableSection key={format?.key || format.name}
                                              title={format.name}
                                              icon={adIcon(format.name)}
                                              description={<p
                                                  className="whitespace-pre-line text-sm leading-6">{format.dimensions}</p>}
                                              price={format.price ?? (rate ? rateDetails(rate) : "Contact us for pricing")}
                                              tag={`${format?.key || format.name}`}/>
                })}
                {additionalOptions.map((row, rowIndex) => <ExpandableSection key={`${row[0]}-${rowIndex}`}
                                                                             title={row[0]} icon={adIcon(row[0])}
                                                                             description="Rate option"
                                                                             price={rateDetails(row)}
                                                                             tag={`${kit.slug}: ${row[0]}`}/>)}
            </div>
        </section>
        {kit.sections?.map(section => <section key={section.title}
                                               className="border-t border-slate-200 px-5 py-12 sm:px-10"><h2
            className="text-3xl font-black" style={{color: kit.color}}>{section.title}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{section.items.map(item => <article
                key={item.heading}><h3 className="text-lg font-bold">{item.heading}</h3><p
                className="mt-2 whitespace-pre-line leading-7">{item.body}</p></article>)}</div>
        </section>)}
        {kit.note &&
            <aside className="mx-5 mb-10 rounded-xl p-6 sm:mx-10" style={{backgroundColor: `${kit.color}15`}}><p
                className="whitespace-pre-line leading-7">{kit.note}</p></aside>}
        <footer className="grid gap-6 px-6 py-9 text-white sm:grid-cols-3 sm:items-center"
                style={{backgroundColor: kit.color}}>
            <div><p className="text-xl font-black">EVERGREEN MEDIA</p><p>329 Main St. Suite 1<br/>Rapid City, SD</p>
            </div>
            {kit.online && <p className="font-bold">{kit.online}</p>}
            <div className="sm:text-right"><p className="font-bold uppercase">For more information</p><Link
                href="mailto:Rick@egmrc.com">Rick | Rick@egmrc.com</Link><br/><Link href="tel:+16053437684;ext=1203">605.343.7684
                Ext. 1203</Link><br/><Link href={`https://${kit.website}`}>{kit.website}</Link></div>
        </footer>
    </main>;
}
