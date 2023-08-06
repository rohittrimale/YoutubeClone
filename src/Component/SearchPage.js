import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import RelatedVideoCard from "./RelatedVideoCard";

const SearchPage = () => {
  const [useSearchParam] = useSearchParams();
  const [searchList, setSearchList] = useState("");

  const searchQuery = useSearchParam.get("query");
  console.log(searchQuery);

  useEffect(() => {
    getSearchData();
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log(json.items);
    setSearchList(json.items);
  };

  if (!searchList) return null;
  return (
    <div className="flex flex-wrap justify-start max-md:justify-center overflow-y-hidden">
      {searchList.map((video) => {
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

export default SearchPage;
