"use client"
import {tagUser} from "@/app/components/ExpandableSection/actions";

const EarlyBirdVideo = () => {

    return <>
        <video
            onPlay={async () => {
                console.log("play")
                await tagUser("early-bird-video-played");
            }}
            poster={"/bride/black-hills-bride-poster.jpg"}
            controls={true}
            className="w-full h-full"
            src={"/bride/black-hills-bride-video.mp4"}
            title="Black Hills Bride Video"
        />
    </>
}

export default EarlyBirdVideo;
