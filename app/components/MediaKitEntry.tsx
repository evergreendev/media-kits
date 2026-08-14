import Form from "@/app/components/Form";
import {StaticImageData} from "next/image";

export default function MediaKitEntry({publication, logo}: {publication: string; logo?: StaticImageData}) {
  return <main className="mx-auto max-w-screen-sm p-4"><Form logo={logo} mediaKitPub={publication}/></main>;
}
