import request from "./request";
import { AxiosResponse } from "axios";
export interface ITopic {
  topicId: number;
  topicName: string;
  topicDesc: string;
  isPublictopics: number;
}

export interface IArticleInfo {
  articleId: string;
  articleTitle: string;
  articleContent: string;
  isCollected: number; //是否已收藏
  isPermission: number; // 是否有访问权限
  browsesNum: number; //浏览数
  commentNum: number; // 评论数
  collectNum: number; // 收藏数
  publishDate: string;
  sourceName: string;
  orderType: string;
  orderId: string;
  pictureDTOList: string[];
  topicResDTOList: ITopic[];
}
export function getArticleInfo(
  articleId: string
): Promise<AxiosResponse<IArticleInfo>> {
  return request({
    action: "/api/article/details",
    articleForm: { articleId },
  }) as any;
}

export function collect(articleId?: string) {
  return request({
    action: "/api/collect/store",
    collectForm: { articleId },
  });
}

export function unCollect(articleId?: string) {
  return request({
    action: "/api/collect/unStore",
    collectForm: { articleId },
  });
}

// 浏览量+1
export function viewArticle(articleId: string) {
  return request({
    action: "/api/article/addArticleNum",
    articleForm: { articleId },
  });
}
