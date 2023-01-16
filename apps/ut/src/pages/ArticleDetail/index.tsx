import React, { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import {
  getArticleInfo,
  IArticleInfo,
  collect,
  unCollect,
  viewArticle,
} from "@/service/articleDetail";
import { getHomeList, IArticleList } from "@/service/home";
import { useParams } from "react-router-dom";
import { xssFilter, emojiFilter } from "@/utils/util";
import ImageView from "@/components/ImageView";
import CardLabel from "@/components/cardLabel";
import moment from "moment";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
const {
  container,
  main,
  sidebar,
  mainTitle,
  sideTitle,
  footer,
  footerLeft,
  footerRight,
  footerLeftBox,
  footerLeftText,
  publishDate,
  articleContent,
  source,
  pointer,
} = style;
import { Modal } from "antd";

const PassageDetail: React.FC = () => {
  const params = useParams<{ articleId: string }>();
  const [articleInfo, setArticleInfo] = useState<IArticleInfo | null>(null);
  const [asideArticles, setAsideArticles] = useState<IArticleInfo[]>([]);
  // const navigate = useNavigate()
  useEffect(() => {
    if (params.articleId) {
      viewArticle(params.articleId);
      loadInfo();
    }
  }, [params]);

  const loadInfo = () => {
    getArticleInfo(params.articleId || "").then((res) => {
      const articleInfo = res as any as IArticleInfo;
      if (!articleInfo.isPermission) {
        const modal = Modal.confirm({
          content: "您暂无权限访问该页面，3s后为您自动跳转至首页。",
          icon: false,
          closable: false,
          cancelText: "取消",
          okText: "确定",
        });
        setTimeout(() => {
          location.href = "/";
          modal.destroy();
        }, 3000);
      } else {
        articleInfo.articleContent = xssFilter(
          emojiFilter(articleInfo?.articleContent || "")
        );
        setArticleInfo(articleInfo);
        const topicId = articleInfo.topicResDTOList[0].topicId;
        getHomeList({
          topicId,
          pageSize: 6,
          pageNumber: 1,
        }).then((res2) => {
          const list2 = (res2 as any as IArticleList) || [];
          setAsideArticles(
            list2?.result?.articleList
              ?.filter((arc) => arc.articleId !== params.articleId)
              ?.slice(0, 5)
          );
        });
      }
    });
  };

  const toggleCollect = () => {
    if (articleInfo?.isCollected) {
      unCollect(articleInfo?.articleId).then(loadInfo);
    } else {
      collect(articleInfo?.articleId).then(loadInfo);
    }
  };

  return (
    <PageWrapper>
      <div className={container}>
        <div className={main}>
          <div className={mainTitle}>{articleInfo?.articleTitle}</div>
          <div>
            <CardLabel
              topicResDTOList={articleInfo?.topicResDTOList || []}
              refreshPage={location.reload.bind(location)}
            ></CardLabel>
          </div>
          <div className={articleContent}>{articleInfo?.articleContent}</div>
          <ImageView list={articleInfo?.pictureDTOList || []}></ImageView>
          <div className={footer}>
            <div className={footerLeft}>
              <div className={footerLeftBox}>
                <i className="font_family icon-eye"></i>
                <span className={footerLeftText}>
                  {articleInfo?.browsesNum || 0}
                </span>
              </div>
              <div className={footerLeftBox}>
                <i className="font_family icon-message"></i>
                <span className={footerLeftText}>
                  {articleInfo?.commentNum || 0}
                </span>
              </div>
              <div
                className={`${footerLeftBox} ${pointer}`}
                onClick={toggleCollect}
              >
                {articleInfo?.isCollected ? (
                  <i
                    className="font_family icon-star1"
                    style={{ color: "#FFD027" }}
                  ></i>
                ) : (
                  <i className="font_family icon-star"></i>
                )}
                <span className={footerLeftText}>
                  {articleInfo?.collectNum || 0}
                </span>
              </div>
            </div>
            <div className={footerRight}>
              <div className={source}>文章来源：{articleInfo?.sourceName}</div>
              <div className={publishDate}>
                {moment(articleInfo?.publishDate).format("YYYY/MM/DD HH:mm")}
              </div>
            </div>
          </div>
        </div>
        <div className={sidebar}>
          <div className={sideTitle}>
            #{articleInfo?.topicResDTOList?.[0]?.topicName}
          </div>
          <ul>
            {asideArticles.map((arc, index) => (
              <li key={arc.articleId}>
                <span>{(index + 1).toString().padStart(2, "0")}</span>
                <Link
                  to={`/articleDetail/${arc.articleId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {arc.articleTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PassageDetail;
