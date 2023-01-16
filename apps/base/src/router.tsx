/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:45:58
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 17:48:39
 * @FilePath: /体验门户/voice-portal-pc-ut/src/router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import MT from "./pages/mt";
import UT from "./pages/ut";
import Layout from "./pages/layout/layout";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/ut/*",
        element: <UT />,
      },
      {
        path: "/mt/*",
        element: <MT />,
      },
    ],
  },
];
