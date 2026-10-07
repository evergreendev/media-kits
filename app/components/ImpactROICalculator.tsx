"use client";

import {useId, useState} from "react";
import Image from "next/image";
import fullPageIcon from "@/public/ad-sizes/full.png";
import halfPageIcon from "@/public/ad-sizes/half-h.png";
import quarterPageIcon from "@/public/ad-sizes/quarter.png";

const rates = {
    Cover: [2080, 2080, 2080],
    Full: [1935, 1835, 1735],
    Half: [1035, 985, 935],
    Quarter: [635, 595, 575],
} as const;

type AdSize = keyof typeof rates;
const adFormats = [
    {value: "Cover", label: "Cover Package", dimensions: '7.5"w × 7.5"h', detail: "Front / back cover dimensions", icon: fullPageIcon},
    {value: "Full", label: "Full Page", dimensions: '7.5"w × 10"h', detail: "Room to tell your story", icon: fullPageIcon},
    {value: "Half", label: "Half Page", dimensions: '7.5"w × 4.875"h', detail: "A focused offer with presence", icon: halfPageIcon},
    {value: "Quarter", label: "Quarter Page", dimensions: '3.625"w × 4.875"h', detail: "A compact space for a great deal", icon: quarterPageIcon},
] as const;
const currency = (value: number, decimals = 0) => value.toLocaleString("en-US", {
    style: "currency", currency: "USD", minimumFractionDigits: decimals, maximumFractionDigits: decimals,
});
const inputClass = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-red-600 focus:outline-2 focus:outline-red-600";

export default function ImpactROICalculator() {
    const id = useId();
    const [issues, setIssues] = useState("1");
    const [size, setSize] = useState<AdSize | "">("");
    const [saleValue, setSaleValue] = useState("25");
    const [responseRate, setResponseRate] = useState("0.25");
    const reach = 58000;
    const issueCount = Number(issues);
    const sale = Number(saleValue);
    const response = Number(responseRate);
    const validIssues = issues !== "" && Number.isInteger(issueCount) && issueCount >= 1 && issueCount <= 12;
    const validSale = saleValue !== "" && Number.isFinite(sale) && sale >= 0;
    const validResponse = responseRate !== "" && Number.isFinite(response) && response >= 0.05 && response <= 100;
    const valid = validIssues && validSale && validResponse;
    const cost = size && validIssues ? rates[size][issueCount === 12 ? 2 : issueCount >= 6 ? 1 : 0] : 0;
    const customers = reach * response / 100;
    // Preserve the original calculator's whole-dollar revenue before calculating returns.
    const revenue = Number((customers * sale).toFixed(0));
    const investment = issueCount * cost;
    const totalRevenue = revenue * issueCount;
    const ready = valid && cost > 0 && Number.isFinite(totalRevenue);
    const results = [
        ["Cost of Ad per Issue", ready ? currency(cost) : "—"],
        ["Cost Per Piece Mailed", ready ? currency(cost / reach, 2) : "—"],
        ["# of Customers per Issue", validResponse ? customers.toFixed(0) : "—"],
        ["Return for every $1 spent", ready ? currency(revenue / cost, 2) : "—"],
        ["Total Revenue per Issue", ready ? currency(revenue) : "—"],
        ["Total Annual Investment", ready ? currency(investment) : "—"],
        ["Total Annual Revenue", ready ? currency(totalRevenue) : "—"],
        ["Annual % Return on Investment", ready ? `${((totalRevenue / investment - 1) * 100).toFixed(2)}%` : "—"],
    ];

    return <section id="calculator" aria-label="Impact return on investment calculator" className="scroll-mt-6 space-y-6">
        <p className="leading-7">Every business owner wants to see results from their advertising campaigns. With so many options to choose from, it’s hard to know what to invest in and how much to invest.</p>
        <p className="leading-7">Use this calculator to estimate your return on advertising in Impact Magazine. Alter the fields marked with an asterisk (*) based on your own experience and expectations.</p>
        <div className="rounded-xl bg-slate-50 p-5 sm:p-8">
            <fieldset className="mb-8">
                <legend className="text-2xl font-black">Choose your ad size *</legend>
                <p className="mt-2 text-sm text-slate-600">Select a format to use its rate in your estimate. Dimensions match the Impact media kit.</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {adFormats.map(format => <label key={format.value} className={`relative flex cursor-pointer flex-col items-center rounded-xl border-2 bg-white p-4 text-center transition hover:border-[#dd3028] ${size === format.value ? "border-[#dd3028] ring-2 ring-red-100" : "border-slate-200"}`}>
                        <input type="radio" name={`${id}-ad-size`} value={format.value} checked={size === format.value}
                            onChange={() => setSize(format.value)} className="peer sr-only" required/>
                        <span className="pointer-events-none absolute inset-0 rounded-xl peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#dd3028]"/>
                        <Image src={format.icon} alt="" className="mb-3 h-20 w-20 object-contain"/>
                        <span className="font-black">{format.label}</span>
                        <span className="mt-1 text-sm text-slate-600">{format.dimensions}</span>
                        <span className="mt-2 text-xs text-slate-500">{format.detail}</span>
                        <span className={`mt-4 rounded-full px-3 py-1 text-xs font-bold ${size === format.value ? "bg-[#dd3028] text-white" : "bg-red-50 text-[#b7241d]"}`}>{size === format.value ? "Selected" : "Select size"}</span>
                    </label>)}
                </div>
            </fieldset>
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${id}-issues`} className="font-bold">Number of Issues *</label>
                    <input id={`${id}-issues`} type="number" min="1" max="12" step="1" required value={issues}
                        onChange={event => setIssues(event.target.value)} className={inputClass} aria-invalid={!validIssues}
                        aria-describedby={!validIssues ? `${id}-issues-error` : undefined}/>
                    {!validIssues && <p id={`${id}-issues-error`} className="mt-2 text-sm text-red-700">Enter a whole number from 1 to 12.</p>}
                </div>
                <div>
                    <label htmlFor={`${id}-reach`} className="font-bold">No. of people reached</label>
                    <input id={`${id}-reach`} readOnly value={reach.toLocaleString("en-US")} className={`${inputClass} bg-slate-100`}/>
                </div>
                <div>
                    <label htmlFor={`${id}-sale`} className="font-bold">Avg sale value ($) *</label>
                    <input id={`${id}-sale`} type="number" min="0" step="any" required value={saleValue}
                        onChange={event => setSaleValue(event.target.value)} className={inputClass} aria-invalid={!validSale}
                        aria-describedby={!validSale ? `${id}-sale-error` : undefined}/>
                    {!validSale && <p id={`${id}-sale-error`} className="mt-2 text-sm text-red-700">Enter a sale value of $0 or more.</p>}
                </div>
                <div>
                    <label htmlFor={`${id}-response`} className="font-bold">Response Rate (%) *</label>
                    <input id={`${id}-response`} type="number" min="0.05" max="100" step="0.05" required value={responseRate}
                        onChange={event => setResponseRate(event.target.value)} className={inputClass} aria-invalid={!validResponse}
                        aria-describedby={!validResponse ? `${id}-response-error` : undefined}/>
                    {!validResponse && <p id={`${id}-response-error`} className="mt-2 text-sm text-red-700">Enter a response rate from 0.05% to 100%.</p>}
                </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">* indicates fields that may be altered. Estimates use the supplied calculator’s 58,000 reach and pricing tiers: 1–5, 6–11, and 12 issues. The media kit lists 60,000 mailboxes and six issues annually.</p>
            <div className="mt-8 border-t border-slate-200 pt-6" aria-live="polite" aria-atomic="true">
                <h2 className="text-2xl font-black text-slate-900">Your estimated results</h2>
                {!size && <p className="mt-2 text-slate-600">Select an ad size to calculate your return.</p>}
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    {results.map(([label, value]) => <div key={label} className="rounded-lg border border-slate-200 bg-white p-4">
                        <dt className="text-sm font-bold text-slate-600">{label}</dt>
                        <dd className="mt-2 text-2xl font-black text-slate-900">{value}</dd>
                    </div>)}
                </dl>
            </div>
        </div>
        <p className="text-sm italic leading-6 text-slate-600">Impact Magazine does not guarantee the outcome or results of any advertising campaign. This calculator provides estimates; individual response differs depending on your offer, design, timing, and audience need. Revenue estimates do not account for your business’s costs or profit margins.</p>
    </section>;
}
