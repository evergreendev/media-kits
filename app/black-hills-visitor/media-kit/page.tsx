import PrintMediaKit, {PrintKit} from "@/app/components/PrintMediaKit";

const kit: PrintKit = {
    title: "Black Hills Visitor",
    kicker: "The go-to guide for locals and tourists alike",
    slug: "black-hills-visitor",
    color: "#17647a",
    intro: "Since 1984, Black Hills Visitor has been the go-to resource for travelers ready to explore, spend, and share. We combine stunning design, smart storytelling, and strategic placement in hotels, attractions, and visitor hubs. Be seen. Be chosen. Be in the guide tourists rely on and act on.",
    stats: [["800K", "Annual readership"], ["210K", "Copies printed annually"], ["360+", "Delivery locations"]],
    hero: [{
        src: "/media-kit/black-hills-visitor/visual-01.png",
        alt: "Black Hills Visitor editorial spread"
    }, {
        src: "/media-kit/black-hills-visitor/visual-03.png",
        alt: "Black Hills Visitor dining spread"
    }, {src: "/media-kit/black-hills-visitor/visual-04.png", alt: "Black Hills Visitor cover"}],
    formats: [{
        name: "Full Page",
        dimensions: "Bleed 5.5\"w x 8.6\"h\nTrim 5.375\"w x 8.375\"h"
    }, {name: "1/2 Page H", dimensions: "Horizontal 4.4\"w x 3.5\"h"}, {
        name: "1/2 Page V",
        dimensions: "Vertical 2.2\"w x 7.4\"h"
    }, {name: "1/4 Page", dimensions: "Vertical 2.0\"w x 3.6\"h"}],
    table: {
        headers: ["Size", "Annual", "Sprin\/Summer seasonal", "Fall\/Winter seasonal"],
        rows: [["1/4 Page", "$1,590", "$1,020", "$680"], ["1/2 Page Horizontal", "$2,940", "$1,890", "$1,260"], ["1/2 Page Vertical", "$2,940", "$1,890", "$1,260"], ["Full Page", "$5,620", "$3,610", "$2,410"], ["Dining Listing", "$0", "$650", "$450"], ["Coupon", "$0", "$650", "$450"]]
    },
    note: "More Visibility with Listings & Coupons & On Us!\nEnhance your visibility with premium dining listings and coupons, included at no extra cost with any 1/2-page ad or larger.",
    online: "Two issues printed annually",
    website: "blackhillsvisitor.com"
};
export default function Page() {
    return <PrintMediaKit kit={kit}/>
}

