import type {Metadata} from "next";
import Link from "next/link";
import ImpactROICalculator from "@/app/components/ImpactROICalculator";
import ImpactCTA from "@/app/components/ImpactCTA";

export const metadata: Metadata = {
    title: "Impact Magazine ROI Calculator | Evergreen Media",
    description: "Estimate the return on your Impact Magazine advertising investment.",
};

export default function Page() {
    return <main className="mx-auto w-full max-w-screen-lg bg-white px-5 py-12 text-slate-900 shadow-xl sm:px-10">
        <Link href="/impact-magazine/media-kit" className="font-bold text-red-700 underline underline-offset-4 hover:text-red-900">← Back to the Impact media kit</Link>
        <header className="mb-8 mt-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[.2em] text-[#dd3028]">Impact Magazine</p>
            <h1 className="text-4xl font-black tracking-tight text-[#dd3028] sm:text-5xl">Return on Investment Calculator</h1>
        </header>
        <div className="mb-10"><ImpactCTA showCalculator={false}/></div>
        <ImpactROICalculator/>
        <div className="mt-10"><ImpactCTA showCalculator={false} prominent/></div>
    </main>;
}
