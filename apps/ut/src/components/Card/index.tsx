import React from "react";
import moment from "moment";

import CardLabel from "@/components/cardLabel/index";
import ImageView from "@/components/ImageView/index";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styles from "./Card.module.scss";
const {
  card,
  cardTitle,
  cardTitleText,
  cardText,
  cardImgBox,
  footer,
  footerLeft,
  footerLeftBox,
  footerLeftText,
  footerDate,
} = styles;
import { xssFilter, emojiFilter } from "@/utils/util";
import { Link } from "react-router-dom";

/**
 * @param articleList 单卡客片对象所包含的全部信息
 * "articleList": {
      "articleId": "文章id",
      "articleTitle": "文章标题",
      "articleContent": "文章内容",
      "browsesNum": "浏览数量",
      "commentNum": "评论数",
      "collectNum": "收藏数",
      "publishDate": "2023/10/23",
      "pictureDTOList": [{
          "pictureAddress": "图片链接地址"
        }],
      "topicResDTOList": [{
        "topicId": "01",
        "topicName": "专题名称",
        "topicDesc": "专题描述"
      }]
    },
 */

export default ({ articleList, refreshPage, blank = false }: any) => {
  //阻止点击卡片的事件捕获
  const stopPropagation = (e?: any) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <ConfigProvider locale={zhCN}>
      <div className={card}>
        <Link
          target={blank ? "_blank" : "_self"}
          to={`/articleDetail/${articleList.articleId}`}
          rel="noreferrer"
        >
          <div className={cardTitle}>
            <span className={cardTitleText}>{articleList.articleTitle}</span>
          </div>

          <CardLabel
            oneRow
            topicResDTOList={articleList?.topicResDTOList || []}
            refreshPage={refreshPage}
          ></CardLabel>

          <div
            className={cardText}
            dangerouslySetInnerHTML={{
              __html: emojiFilter(xssFilter(articleList.articleContent)),
            }}
          ></div>

          <div className={cardImgBox} onClick={stopPropagation}>
            <ImageView
              list={articleList?.pictureDTOList || []}
              showMax={7}
              size={100}
            ></ImageView>
          </div>

          <div className={footer}>
            <div className={footerLeft}>
              <div className={footerLeftBox}>
                <i className="font_family icon-eye"></i>
                <span className={footerLeftText}>
                  {articleList.browsesNum || 0}
                </span>
              </div>
              <div className={footerLeftBox}>
                <i className="font_family icon-message"></i>
                <span className={footerLeftText}>
                  {articleList.commentNum || 0}
                </span>
              </div>
              <div className={footerLeftBox}>
                <i className="font_family icon-star"></i>
                <span className={footerLeftText}>
                  {articleList.collectNum || 0}
                </span>
              </div>
            </div>
            <span className={footerDate}>
              {moment(articleList?.publishDate).format("YYYY/MM/DD")}
            </span>
          </div>
        </Link>
      </div>
    </ConfigProvider>
  );
};
