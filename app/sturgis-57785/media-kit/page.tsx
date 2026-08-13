import PrintMediaKit, {PrintKit} from "@/app/components/PrintMediaKit";

const kit: PrintKit = {
    title: "57785 — The Spirit of Sturgis",
    kicker: "Community & tourism magazine",
    slug: "sturgis-57785",
    color: "#75652c",
    intro: "Discover warm welcomes and beautiful views in Sturgis, the Key City of the Black Hills. Announcing a new edition of Sturgis Magazine, focusing on our year-round businesses, community, and tourism! It will show visitors what to do and where to go, but also who we are as a community. Celebrating the soul of Sturgis — the businesses, people, and culture of our hometown.",
    stats: [["75K", "Annual readership"], ["10K", "Copies printed annually"], ["66+", "Distribution locations"]],
    hero: [{
        src: "/media-kit/sturgis-57785/visual-01.png",
        alt: "Sturgis community magazine spread"
    }, {
        src: "/media-kit/sturgis-57785/visual-02.png",
        alt: "Sturgis 57785 cover"
    }, {src: "/media-kit/sturgis-57785/visual-03.png", alt: "Sturgis events spread"}],
    formats: [{
        name: "Full Page",
        dimensions: "Safety 7.375”w x 9.875”h\nTrim 8.375”w x 10.875”h\nBleed 8.5”w x 11.125”h",
        price: "$1,456"
    }, {name: "Full Page — No Bleed", dimensions: "7.375”w x 9.875”h", price: "$1,456"}, {
        name: "1/2 Page",
        dimensions: "7”w x 4.75”h",
        price: "$896"
    }, {name: "1/4 Page", dimensions: "3.4”w x 4.75”h", price: "$560"}, {
        name: "Cover",
        dimensions: "Premium position",
        price: "Call to reserve"
    }],
    note: "FORMAT & REVISIONS\nHigh resolution PDFs (300 dpi) preferred. We accept PDF, JPG, PNG, and EPS. Please convert all RGB colors to CMYK. Email your press-ready PDF ad file to info@egmrc.com. Full Page and Two Page Spread: keep all content 1/2” from gutter. Ad design includes three proofs free of charge. Revisions after the third proof: $15/proof. $75 to purchase your ad design file.\n\nOur annual publication is a partnership with our chamber members and friends at Evergreen Media. — Veronica M. Grosek, Executive Director, Sturgis Area Chamber of Commerce & Visitors Bureau\n\nFull Size · Full Color · 10,000 Copies Distributed · Plus Digital Version",
    website: "evergreenmediarc.com"
};
export default function Page() {
    return <PrintMediaKit kit={kit}/>
}
