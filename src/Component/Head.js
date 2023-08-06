import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { GOOGLE_API_KEY, SEARCH_SUGGESTION_API } from "../utils/constant";
import SearchPage from "./SearchPage";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggetion = async () => {
    try {
      const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
      const json = await data.json();

      setSuggestion(json[1]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useMemo(() => {
    console.log("Hii");
    getSearchSuggetion();
  }, [searchQuery]);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setOnFocus(false);
    nevigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center p-5 m-2 shadow-lg  ">
        <div className="flex gap-2 col-span-1 ">
          <img
            src="https://openclipart.org/image/2000px/221605"
            alt="menu"
            className="h-6 cursor-pointer scale-75 hover:scale-90 max-sm:hidden"
            onClick={toggleMenuHandler}
          />

          <a href="/">
            <img
              alt="yt-logo"
              src="https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png"
              className="h-8"
            />
          </a>
        </div>
        <form className="w-1/2" onSubmit={handleSearchClick}>
          <div className="w-[100%] flex ">
            <input
              type="text"
              className="border border-gray-500 p-2 rounded-l-full  w-8/12 h-8"
              onChange={(e) => {
                let timer = setTimeout(() => {
                  setSearchQuery(e.target.value);
                }, 200);

                return () => {
                  clearTimeout(timer);
                };
              }}
              onFocus={() => setOnFocus(true)}
              onBlur={() => {
                setOnFocus(false);
              }}
            />

            <button>
              <img
                className="p-2 pr-5 pl-5  border shadow-lg border-gray-500 bg-gray-200 rounded-r-full h-8 text-center"
                src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                alt="search"
              />
            </button>
          </div>
          {onFocus && (
            <div className="fixed py-2 px-2 w-[32%] shadow-lg  rounded-lg bg-white">
              <ul>
                {suggestion.map((s) => (
                  <li
                    key={s}
                    className="flex items-center py-2 px-3 rounded-xl shadow-sm hover:bg-gray-100"
                  >
                    <svg
                      className="mr-2 "
                      width="18px"
                      height="18px"
                      viewBox="0 -0.5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.989 15.4905L19.5 19.0015"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
        <div className="col-span-1">
          <img
            alt="user-icon"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            className="h-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
