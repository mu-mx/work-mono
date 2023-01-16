import request from "./request";

/******************************** 获取我的专题，以及公共专题 *********************************/
export interface PublicTopic {
  isPublictopic: number;
  sort: number;
  topicDesc: string;
  topicId: number;
  topicName: string;
  isActive?: boolean;
}

export interface TopicItem {
  id?: number;
  topicId: number;
  topicName: string;
  topicDesc: string;
  isPublictopic: number;
  sort: string;
}

export interface PublicTopicData {
  publicTopic: PublicTopic;
  topicList: TopicItem[];
}

export function getMyTopic(): Promise<PublicTopicData> {
  return request({
    action: "/api/topic/myTopic",
    // object: { topicId },
  }) as any;
}

/******************************** 获取推荐专题 *********************************/
export interface TopicResDTOList {
  topicId: number;
  topicName: string;
  isActive?: boolean;
}

export interface Classify {
  classifyId: number;
  classifyName: string;
  topicResDTOList: TopicResDTOList[];
}

export function getFullTopic(): Promise<Classify[]> {
  return request({
    action: "/api/topic/fullTopic",
  }) as any;
}

/******************************** 获取专题下列表 *********************************/
export interface PictureDTOList {
  pictureAddress: string;
}

export interface TopicResDTOList {
  topicId: number;
  topicName: string;
  isActive?: boolean;
}

export interface IArticle {
  articleId: number;
  articleTitle: string;
  content: string;
  browsesNum: number;
  commentNum: number;
  collectNum: number;
  publishDate: string;
  pictureDTOList: PictureDTOList[];
  topicResDTOList: TopicResDTOList[];
}

export interface Result {
  articleList: IArticle[];
  topicDesc: string;
  topicId: number;
  topicName: string;
  isSubscribed: number;
}
export interface ArticleListData {
  result: Result;
  totalCount: number;
}

export function getArticleList(
  topicId: number,
  pageNumber: number,
  pageSize: number
): Promise<ArticleListData> {
  return request({
    action: "/api/home/articleList",
    homeArticleForm: { topicId, pageSize, pageNumber },
  }) as any;
}

/******************************** 查询用户是否对这个专题描述有权限*********************************/
export interface IAuth {
  isPermission: number;
}

export function getJurisdiction(topicId: number): Promise<IAuth> {
  return request({
    action: "/api/topic/topicDesc",
    topicForm: { topicId },
  }) as any;
}

export function subscribe(topicId: number) {
  return request({
    action: "/api/subscribe/subscribe",
    subscribeForm: { topicId },
  });
}

export function unSubscribe(topicId: number) {
  return request({
    action: "/api/subscribe/unSubscribe",
    subscribeForm: { topicId },
  });
}

export function saveTopicList(list: TopicItem[]) {
  return request({
    action: "/api/special/updateSpecialSort",
    specialFrom: {
      sortList: list.map((it) => it.topicId),
    },
  });
}
