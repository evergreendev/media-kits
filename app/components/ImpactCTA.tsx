import {ArrowRight, Calculator} from "lucide-react";
import Link from "next/link";

export default function ImpactCTA({calculatorHref = "/impact-magazine/roi-calculator", prominent = false, showCalculator = true}: {
    calculatorHref?: string;
    prominent?: boolean;
    showCalculator?: boolean;
}) {
    return <div className={`rounded-2xl p-6 text-center sm:p-8 ${prominent
        ? "bg-[#dd3028] text-white shadow-lg shadow-red-900/10"
        : "border border-red-100 bg-white text-slate-900 shadow-lg shadow-red-900/5"}`}>
        <p className={`text-xs font-black uppercase tracking-[.2em] ${prominent ? "text-white/80" : "text-[#b7241d]"}`}>Local offers. Real possibilities.</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Your next customer could be one page away.</h2>
        <p className={`mx-auto mt-3 max-w-lg leading-7 ${prominent ? "text-white/90" : "text-slate-600"}`}>Put your business in local mailboxes. See how your ad could turn readers into customers, then let’s make an Impact.</p>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3">
            <a href="/impact-magazine/reserve"
                className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-5 py-4 font-bold shadow-sm transition motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${prominent
                    ? "bg-white text-[#b7241d] hover:bg-red-50 focus-visible:outline-white"
                    : "bg-[#dd3028] text-white hover:bg-[#b7241d] focus-visible:outline-[#dd3028]"}`}>
                Reserve your spot in Impact today <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0"/>
            </a>
            {showCalculator && <Link href={calculatorHref}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 ${prominent
                    ? "border-white/70 text-white hover:bg-white/10 focus-visible:outline-white"
                    : "border-red-200 text-[#b7241d] hover:border-[#dd3028] hover:bg-red-50 focus-visible:outline-[#dd3028]"}`}>
                <Calculator aria-hidden="true" className="h-5 w-5 shrink-0"/> See what your ad could earn — ROI calculator
            </Link>}
        </div>
    </div>;
}
