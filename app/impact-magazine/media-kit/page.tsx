import PrintMediaKit, {PrintKit} from "@/app/components/PrintMediaKit";

const kit: PrintKit = {
    title: "Impact magazine",
    kicker: "Savvy. Local. Broad.",
    slug: "impact-magazine",
    color: "#dd3028",
    intro: "Consumers today have less free time than ever. The last thing they want is to sort through emails, websites, or newspapers to find the best local deals. Impact magazine takes away the guesswork by bringing local coupons and sales directly to their mailbox. Teaming up with us puts your business in front of over 60,000 households and businesses in the Black Hills. Impact magazine is easy for you, and even easier for your customers.",
    stats: [["6X", "Six issues printed annually"], ["60K", "Mailboxes â€” homes & businesses"], ["1.1Â¢", "As little as â€” per prospect reached"]],
    hero: [{
        src: "/media-kit/impact-magazine/visual-01.png",
        alt: "Impact magazine coupon covers"
    }, {src: "/media-kit/impact-magazine/visual-02.png", alt: "Impact magazine cover"}],
    formats: [{name: "Front Cover", dimensions: "7.5\"w x 7.5\"h"}, {
        name: "Back Cover",
        dimensions: "7.5\"w x 7.5\"h"
    }, {name: "Full Page", dimensions: "7.5\"w x 10\"h"}, {
        name: "1/2 Page",
        dimensions: "7.5\"w x 4.875\"h"
    }, {name: "1/4 Page", dimensions: "3.625\"w x 4.875\"h"}],
    table: {
        headers: ["2025 rate / cost per issue", "1x", "2x\/5x", "6x"],
        rows: [["Cover Package", "$2,080", "$2,080", "$2,080"], ["Full Page", "$1,935", "$1,835", "$1,735"], ["Half Page", "$1,035", "$985", "$935"], ["Quarter Page", "$635", "$595", "$575"]]
    },
    sections: [{
        title: "2026 calendar",
        items: [{
            heading: "January\/February",
            body: "Ad deadline 12/9/25\nIn-home 12/30\/31/25"
        }, {heading: "March\/April", body: "Ad deadline 2/10\nIn-home 2/26\/27"}, {
            heading: "May\/June",
            body: "Ad deadline 4/7\nIn-home 4/30\/5/1"
        }, {heading: "July\/August", body: "Ad deadline 6/9\nIn-home 6/25\/26"}, {
            heading: "September\/October",
            body: "Ad deadline 8/11\nIn-home 8/27\/28"
        }, {heading: "November\/December", body: "Ad deadline 10/6\nIn-home 10/29\/30"}]
    }, {
        title: "Why do coupons count?",
        items: [{
            heading: "Motivate",
            body: "Motivate customers to try your business and attract them to specific products or services."
        }, {
            heading: "Reconnect",
            body: "Incentive to re-establish relationships and reward continued customer loyalty."
        }, {heading: "Measure", body: "Track your return on investment."}]
    }],
    online: "360K+ printed annually",
    website: "impactmagazinerc.com"
};
export default function Page() {
    return <PrintMediaKit kit={kit}/>
}

