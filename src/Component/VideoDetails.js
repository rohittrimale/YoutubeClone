import React from "react";

const VideoDetails = ({ videoData }) => {
  const { title, description, channelTitle } = videoData.snippet;
  return (
    <div className="pt-4" width="1000">
      <h1 className="font-bold text-xl pb-4">{title}</h1>
      {/* <p>{description}</p> */}
    </div>
  );
};

export default VideoDetails;
