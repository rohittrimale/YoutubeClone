import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";
import SearchPage from "./Component/SearchPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./Component/Body";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="app overflow-y-hidden">
      <RouterProvider router={appRouter} />
    </div>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
