import Form from "../components/Form";
import Logo from "@/public/family/family-logo.webp"

const Page = () => {

    return (
        <div className={ "max-w-screen-sm mx-auto p-4"}>
            <Form logo={Logo} mediaKitPub="black-hills-family" />
        </div>
    )
}

export default Page;
