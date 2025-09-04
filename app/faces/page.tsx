import Form from "../components/Form";
import Logo from "@/public/faces-logo.png"

const Page = () => {

    return (
        <div className={ "max-w-screen-sm mx-auto p-4"}>
            <Form logo={Logo} mediaKitUrl="/faces/media-kit" />
        </div>
    )
}

export default Page;
