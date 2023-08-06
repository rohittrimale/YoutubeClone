import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, DOWNLOAD_YOUTUBE_VIDEO } from "../utils/constant";
import VideoDetails from "./VideoDetails";
import VideoContainer from "./VideoContainer";
import CommentCard from "./CommentCard";
import RelatedVideos from "./RelatedVideos";

const WatchPage = () => {
  const [useSearchParam] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    videoDetailsApi();
    // channelDetailsApi();
    downloadVideo();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useSearchParam.get("v")]);

  const videoId = useSearchParam.get("v");

  const videoDetailsApi = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${useSearchParam.get(
          "v"
        )}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();

      setVideoDetails(json.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const realtedVideoApi = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${useSearchParam.get(
          "v"
        )}=video&maxResults=50&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();

      setVideoDetails(json.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const downloadVideo = async () => {
    const data = await fetch(DOWNLOAD_YOUTUBE_VIDEO + useSearchParam.get("v"));
    const json = await data.json();
    setDownloadLink(json.links[1].url);
  };

  if (!videoDetails) return null;
  return (
    <div className="overflow-y-hidden">
      <div className="w-[98vw] flex flex-row justify-between mt-6 max-lg:flex-col max-lg:justify-center">
        <div className="max-w-[70%]  mx-4 max-lg:max-w-[100%] ">
          <iframe
            className="rounded-lg w-[69vw] h-[35vw] max-lg:w-[100%] max-lg:h-[53vw]"
            src={
              "https://www.youtube-nocookie.com/embed/" +
              useSearchParam.get("v") +
              "?rel=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoDetails videoData={videoDetails} />

          <div className="flex">
            {downloadLink && (
              <a href={downloadLink}>
                <button className=" h-10 bg-blue-500 m-3 px-3 rounded-lg">
                  Download Video
                </button>
              </a>
            )}
          </div>
          <div className="h-[100%] w-[100%] overflow-y-auto overflow-x-hidden mt-6 p-4 max-lg:h-96 mb-6">
            <CommentCard videoId={videoId} />
          </div>
        </div>
        <div className="max-w-[25%] max-h-1/3 max-lg:max-w-[100%]">
          {/* <VideoContainer /> */}
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
