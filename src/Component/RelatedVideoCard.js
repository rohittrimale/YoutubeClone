import React from "react";

const RelatedVideoCard = ({ videos }) => {
  const { title, channelTitle, description } = videos?.snippet;

  const { url } = videos?.snippet?.thumbnails?.medium;

//   const { viewCount, likeCount, commentCount } = videos.statistics;

  return (
    <div className=" p-3 cursor-pointer hover:scale-105 duration-150 shadow-sm hover:shadow-xl ">
      <img
        src={url}
        className="w-[100%]	 rounded-2xl hover:rounded-none duration-200"
      />
      <h1 className="font-bold ">{title}</h1>
      <h1>{channelTitle}</h1>
      <div>
        {/* <p>{viewCount} Views </p> */}
      </div>
    </div>
  );
};

export default RelatedVideoCard;
