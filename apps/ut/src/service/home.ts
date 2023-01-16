/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 15:03:35
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:22:49
 * @FilePath: /体验门户/voice-portal-pc-ut/src/service/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";
import { AxiosResponse } from "axios";
import { IArticleInfo } from "./articleDetail";
// 测试api
export interface IUserInfo {
  name: string;
  age: number;
}
export function getInfo(): Promise<AxiosResponse<IUserInfo>> {
  return request({
    action: "/test/test",
    userInfo: { userName: "yaoyu75" },
  });
}

export interface IBasePage {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export interface IArticleList extends IBasePage {
  result: {
    articleList: IArticleInfo[];
    topicDesc: string;
  };
}
export type { IArticleInfo };

export function getHomeList(params: {
  topicId?: number;
  pageSize: number;
  pageNumber: number;
}): Promise<AxiosResponse<IArticleList>> {
  return request({
    action: "/api/home/articleList",
    homeArticleForm: params,
  });
}

export interface IPersonalInfo {
  userName: string;
  realName: string;
  organizationFullName: string;
  headImg: string;
  subscribeNum: number;
  commentNum: number;
  collectNum: number;
}

export function getMyInfo(): Promise<AxiosResponse<IPersonalInfo>> {
  return request({
    action: "/api/home/personalCentre",
  });
}
