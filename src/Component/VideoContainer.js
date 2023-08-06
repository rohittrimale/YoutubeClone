import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log(json);
      setVideos(json?.items);
    } catch (error) {
      console.log("error");
    }
  };

  if (!videos) return null;

  return (
    <div className="flex flex-wrap justify-start max-md:justify-center overflow-y-hidden">
      {videos.map((video) => {
        return (
          <div
            key={video.id}
            className="max-w-[22vw] min-w-[22vw]  min-2xl:max-w-[30vw] min-2xl:min-w-[30vw] max-lg:max-w-[42vw] max-lg:min-w-[42vw] max-sm:min-w-[85vw] max-sm:max-w-[85vw]"
          >
            <Link to={"/watch?v=" + video.id}>
              <VideoCard videos={video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;
