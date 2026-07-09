import Link from "next/link";
import { Metadata } from "next";
import EarlyBirdCTA from "@/app/landing/black-hills-bride/EarlyBirdCTA";
import logo from "@/public/bride/bride-logo-no-media-kit.png"
import Image from "next/image";
import EarlyBirdVideo from "@/app/landing/black-hills-bride/EarlyBirdVideo";

export const metadata: Metadata = {
  title: "Black Hills Bride — Landing",
  description: "Learn about Black Hills Bride. Watch the video, view the media kit, and sign up early.",
};

export default function Page() {
  return (
      <div className="flex flex-col min-h-screen">
          <div className="flex flex-col bg-slate-100 w-full max-w-screen-xl mx-auto my-auto">
              {/* Hero */}<h1 className="bg-white text-4xl sm:text-5xl font-bold mb-4 p-4"><Image className="mx-auto" src={logo} alt="Black Hills Bride"/></h1>
              {/* Video Section */}
              <section className="px-6 py-10 my-auto">
                  <div className="max-w-5xl mx-auto">
                      <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center">
                          <EarlyBirdVideo/>
                      </div>
                  </div>
              </section>
              <section className="bg-[#6f9488] text-white py-12 px-6 mt-auto">
                  <div className="max-w-5xl mx-auto text-center">
                      <div className="flex flex-wrap gap-4 justify-center items-center">
                          <EarlyBirdCTA tag="black-hills-bride" />
                          <Link
                              href="/black-hills-bride/media-kit"
                              className="inline-block bg-transparent border border-white text-white font-semibold py-3 px-5 rounded-md hover:bg-white/10 transition"
                          >
                              View Media Kit
                          </Link>
                      </div>
                  </div>
              </section>


          </div>
      </div>

  );
}
