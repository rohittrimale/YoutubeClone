import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Head from "./Component/Head";
import Body from "./Component/Body";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";
import VideoContainer from "./Component/VideoContainer";
import SearchPage from "./Component/SearchPage";
import SideBar from "./Component/SideBar";

function App() {
  return (
    <>
      <Head />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
