/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-09 13:54:59
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-25 11:11:48
 * @FilePath: /voice-portal-pc-ut/src/service/myCollect.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";
import { AxiosResponse } from "axios";
/******************************** 获取我的收藏列表 *********************************/
export interface ITopic {
  topicId: number;
  topicName: string;
  topicDesc: string;
  isPublictopic: number;
}

export interface IArticleInfo {
  articleId: string;
  articleTitle: string;
  articleContent: string;
  isCollected: number; //是否已收藏
  browsesNum?: number; //浏览数
  commentNum?: number; // 评论数
  collectNum?: number; // 收藏数
  publishDate: string;
  sourceName: string;
  orderId: string;
  pictureDTOList: string[];
  topicResDTOList: ITopic[];
}
export interface IArticleListData {
  result: IArticleInfo;
  totalCount: number;
}
export function getCollectArticleInfo(
  pageSize: number,
  pageNumber: number
): Promise<AxiosResponse<IArticleListData>> {
  return request({
    action: "/api/collect/search",
    pageForm: { pageSize, pageNumber },
  }) as any;
}

/******************************** 获取我的个人信息 *********************************/
export interface IPersonalInfo {
  userName: string;
  realName: string;
  organizationFullName: string;
  headImg: string;
  subNum: number;
  commentNum: number;
  collectNum: number;
}
export interface ITabList {
  label: string;
  key: string;
}

export function getMyInfo(): Promise<AxiosResponse<IPersonalInfo>> {
  return request({
    action: "/api/home/personalCentre",
  });
}
/******************************** 获取我的订阅 *********************************/
export interface SubscribeList {
  topicDesc: string;
  topicId: number;
  topicName: string;
  isPublic: number; //1是公共专题，0是非公共专题
}

export function unSubscribe(topicId: number) {
  return request({
    action: "/api/subscribe/unSubscribe",
    subscribeForm: { topicId },
  });
}
export function getSubscribeList(
  pageSize: number,
  pageNumber: number
): Promise<AxiosResponse<SubscribeList>> {
  return request({
    action: "/api/subscribe/search",
    // action: "/api/special/getSubscribePageList ",
    pageForm: { pageSize, pageNumber },
  }) as any;
}
