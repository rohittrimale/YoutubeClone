import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = ({ videoId }) => {
  const [relVideo, setRelVideos] = useState(null);

  const realtedVideoApi = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=50&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      console.log(json);
      setRelVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    realtedVideoApi();
  }, [videoId]);

  if (!relVideo) return null;

  return (
    <div className="flex flex-wrap justify-start max-md:justify-center overflow-y-hidden">
      {relVideo.map((video) => {
        return (
          <div
            key={video.id.videoId}
            className="max-w-[22vw] min-w-[22vw]  min-2xl:max-w-[30vw] min-2xl:min-w-[30vw] max-lg:max-w-[42vw] max-lg:min-w-[42vw] max-sm:min-w-[85vw] max-sm:max-w-[85vw]"
          >
            <Link to={"/watch?v=" + video.id.videoId}>
              <RelatedVideoCard videos={video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RelatedVideos;
