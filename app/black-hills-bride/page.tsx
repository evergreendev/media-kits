import Form from "../components/Form";
import Logo from "@/public/bride/bride-logo.png"

const Page = () => {

    return (
        <div className={ "max-w-screen-sm mx-auto p-4"}>
            <Form logo={Logo} mediaKitPub="black-hills-bride" />
        </div>
    )
}

export default Page;
