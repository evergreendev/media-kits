import ExpandableSection from "@/app/components/ExpandableSection";
import doubleSpread from "@/public/double-spread.png";

const Page = () => {

    return <div>
        <ExpandableSection icon={doubleSpread} title="Double Page Spread" price="$4,000" description={`16.75" x 10.75"`}/>
    </div>
}


export default Page;
