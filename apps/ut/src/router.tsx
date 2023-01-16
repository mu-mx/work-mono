/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:45:58
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-12 16:47:58
 * @FilePath: /体验门户/voice-portal-pc-ut/src/router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import LazyLoad from "@/components/LazyLoad";
import Home from "./pages/Home/Home";

const VoiceHeadlines = LazyLoad(
  () => import("./pages/VoiceHeadlines/VoiceHeadlines")
);
const MyCenter = LazyLoad(() => import("./pages/MyCenter"));
const MyCollected = LazyLoad(() => import("./pages/MyCenter/MyCellect"));
const MySubscribed = LazyLoad(() => import("./pages/MyCenter/MySubscribe"));
const MyCommented = LazyLoad(() => import("./pages/MyCenter/MyComment"));
// 懒加载标准格式
const PassageDetail = LazyLoad(() => import("./pages/ArticleDetail"));
const Management = LazyLoad(() => import("./pages/Management"));

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/voice",
    element: <VoiceHeadlines />,
  },
  {
    path: "/voice/:topicId",
    element: <VoiceHeadlines />,
  },

  {
    path: "/mycenter",
    element: <MyCenter />,
    children: [
      {
        path: "/mycenter/collect",
        element: <MyCollected />,
      },
      {
        path: "/mycenter/subscribe",
        element: <MySubscribed />,
      },
      {
        path: "/mycenter/comment",
        element: <MyCommented />,
      },
    ],
  },
  {
    path: "/articleDetail/:articleId",
    element: <PassageDetail />,
  },

  {
    path: "/management",
    element: <Management />,
  },
];
