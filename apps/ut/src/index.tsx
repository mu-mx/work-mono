/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-15 20:18:46
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 17:45:05
 * @FilePath: /体验门户/voice-portal-pc-ut/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "antd/dist/antd.min.css";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
// import "./mock";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createHashRouter(routes, {
  basename: window.__MICRO_APP_BASE_ROUTE__ || "/",
});
root.render(
  // <React.StrictMode>
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
  // </React.StrictMode>
);
