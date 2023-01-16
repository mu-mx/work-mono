import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "antd/dist/antd.min.css";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import microApp from "@micro-zoe/micro-app";

microApp.start();

const root = ReactDOM.createRoot(
  document.getElementById("baseRoot") as HTMLElement
);
const router = createHashRouter(routes);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
