import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <VideoContainer />
    </div>
  );
};

export default Body;
