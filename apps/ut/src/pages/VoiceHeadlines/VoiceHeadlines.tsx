import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./VoiceHeadlines.module.scss";
import PageWrapper from "@/components/PageWrapper";
import Card from "@/components/Card/index";
import DndKit from "@/components/dndKit/index";

import { Button, Pagination, Modal, Spin } from "antd";
import type { PaginationProps } from "antd";
// import zhCN from "antd/es/locale/zh_CN";

import {
  getFullTopic,
  getMyTopic,
  getArticleList,
  getJurisdiction,
  PublicTopic,
  TopicResDTOList,
  IArticle,
  Classify,
  Result,
  PublicTopicData,
  TopicItem,
  ArticleListData,
  subscribe,
  unSubscribe,
  saveTopicList,
  IAuth,
} from "@/service/VoiceHeadlines";

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTopicId, setActiveTopicId] = useState<number>(-1);
  const [isEmpty, setisEmpty] = useState(false); // 文章列表空状态
  const [isEdit, setisEdit] = useState(true); //我的专题切换点击与拖拽

  const [totalCount, settotalCount] = useState<number>(0); //总条数
  const [pageNumber, setpageNumber] = useState<number>(1); //第几页
  const [pageSize] = useState<number>(10); // 每页条数

  const [publicTopic, setpublicTopic] = useState<PublicTopic>({
    isPublictopic: 1,
    sort: 0,
    topicDesc: "",
    topicId: -1,
    topicName: "",
  }); //公开专题
  const [myTopicList, setpmyTopicList] = useState<TopicItem[]>([]); //我的专题
  const [classify, setclassify] = useState<Classify[]>([]); //推荐专题
  const [cardList, setcardList] = useState<IArticle[]>([]);
  const [topicInfo, setTopicInfo] = useState<Result>({
    articleList: [],
    topicDesc: "",
    topicId: -1,
    topicName: "",
    isSubscribed: 0,
  });

  const params = useParams<{ topicId: string }>();

  useEffect(() => {
    setLoading(true);
    if (params.topicId) {
      getJurisdiction(Number(params.topicId))
        .then((res: IAuth) => {
          if (res.isPermission) {
            getMyTopicData();
            getFullTopicData();
          } else {
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
          }
        })
        .catch(() => setLoading(false));
    } else {
      getMyTopicData();
      getFullTopicData();
    }
  }, [params]);

  //获取我的专题/公开专题数据
  const getMyTopicData = (refresh = true) => {
    getMyTopic()
      .then((res: PublicTopicData) => {
        if (refresh) {
          const activeId = params.topicId
            ? Number(params.topicId)
            : res.publicTopic.topicId;
          setActiveTopicId(activeId);
        }
        setpublicTopic(res.publicTopic);
        //通过公共专题id获取专题下列表

        // 拖拽需要有个id
        res.topicList?.forEach((topic) => {
          topic.id = topic.topicId;
        });
        setpmyTopicList(res.topicList);
      })
      .catch(() => setLoading(false));
  };

  //获取(全量)推荐专题
  const getFullTopicData = () => {
    getFullTopic()
      .then((res: Classify[]) => {
        setclassify(res);
      })
      .catch(() => setLoading(false));
  };

  //获取专题下列表
  const getArticleListData = (
    topicId: number,
    pageNumber: number,
    pageSize: number
  ) => {
    getArticleList(topicId, pageNumber, pageSize)
      .then((res: ArticleListData) => {
        if (res.result?.articleList?.length) {
          setcardList(res.result.articleList);
          setisEmpty(false);
        } else {
          setcardList(res.result.articleList || []);
          setisEmpty(true);
        }
        settotalCount(res.totalCount);
        setTopicInfo(res.result);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (activeTopicId > 0) {
      getArticleListData(activeTopicId, pageNumber, pageSize);
    }
  }, [pageNumber, pageSize, activeTopicId]);

  //页码切换
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setpageNumber(pageNumber);
  };

  //订阅按钮切换
  const subscribeTopic = () => {
    subscribe(activeTopicId).then(() => {
      getMyTopicData(false);
      getFullTopicData();
      getArticleListData(activeTopicId, pageNumber, pageSize);
    });
  };

  const unSubscribeTopic = () => {
    Modal.confirm({
      content: "您确定要取消订阅该专题吗？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        unSubscribe(activeTopicId).then(() => {
          getMyTopicData(false);
          getFullTopicData();
          getArticleListData(activeTopicId, pageNumber, pageSize);
        });
      },
    });
  };

  //专题的点击事件
  const selectedActive = (topicId: number) => {
    setActiveTopicId(topicId);
    setpageNumber(1);
  };

  //保存我的专题
  const saveMyTopicList = (list: TopicItem[]) => {
    saveTopicList(list).then(() => {
      setpmyTopicList(list);
    });
  };

  //刷新页面
  const refreshPage = () => {
    location.reload();
  };
  return (
    <PageWrapper>
      <div className={styles.background}>
        <Spin spinning={loading}>
          <div className={styles.conter}>
            {/* 左侧专题栏 */}
            <div className={styles.conterLleft}>
              {/* 我的专题 */}
              <div className={styles.myTopic}>
                <div className={styles.myTopicTitle}>
                  <span>
                    <span className={styles.span1}>我的专题</span>
                    <span className={styles.span2}>拖拽调整专题顺序</span>
                  </span>
                  {isEdit ? (
                    <span
                      className={styles.edit}
                      onClick={() => {
                        setisEdit(false);
                      }}
                    >
                      编辑
                    </span>
                  ) : (
                    <span
                      className={styles.save}
                      onClick={() => {
                        setisEdit(true);
                      }}
                    >
                      完成
                    </span>
                  )}
                </div>
                <ul className={styles.myTopicContent}>
                  {/* 公开专题 */}
                  <li
                    className={
                      activeTopicId == publicTopic.topicId
                        ? styles.active
                        : styles.openTopicRow
                    }
                    key={publicTopic.topicId}
                    onClick={() => {
                      selectedActive(publicTopic.topicId);
                    }}
                  >
                    {publicTopic.topicName}
                  </li>
                </ul>
                {/* 我的专题 */}
                <div className={styles.myTopicListContent}>
                  {isEdit ? (
                    myTopicList.map((item) => (
                      <div
                        key={item.topicId}
                        className={
                          activeTopicId == item.topicId
                            ? styles.active
                            : styles.myTopicRow
                        }
                        onClick={() => {
                          selectedActive(item.topicId);
                        }}
                      >
                        {item.topicName}
                      </div>
                    ))
                  ) : (
                    <DndKit
                      myTopicList={myTopicList}
                      saveMyTopicList={saveMyTopicList}
                      // isEdit={isEdit}
                    ></DndKit>
                  )}
                </div>
              </div>

              <div className={styles.br}></div>

              {/* 推荐专题 */}
              <div className={styles.recommendedTopics}>
                <div className={styles.recommendedTopicsTitle}>推荐专题</div>
                {
                  classify.map((it: any) => (
                    <div className={styles.CategoryOne} key={it.classifyId}>
                      <div>{it.classifyName}</div>
                      <ul className={styles.recommendedTopicContent}>
                        {it.topicResDTOList.map((item: TopicResDTOList) => (
                          <li
                            className={
                              activeTopicId == item.topicId
                                ? styles.active
                                : styles.recommendedTopicRow
                            }
                            key={item.topicId}
                            onClick={() => {
                              selectedActive(item.topicId);
                            }}
                          >
                            {item.topicName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* 右侧展示栏 */}
            <div className={styles.conterRight}>
              {/* 头部 */}
              <div className={styles.header}>
                <div className={styles.headerbox}>
                  <span className={styles.headerboxTitle}>
                    #{topicInfo.topicName}
                  </span>
                  {activeTopicId !== publicTopic.topicId ? (
                    topicInfo.isSubscribed ? (
                      <Button
                        danger
                        className={styles.headerboxButton}
                        onClick={unSubscribeTopic}
                      >
                        取消订阅
                      </Button>
                    ) : (
                      <Button
                        danger
                        className={styles.headerboxButton}
                        onClick={subscribeTopic}
                      >
                        订阅
                      </Button>
                    )
                  ) : null}
                </div>
              </div>
              <div>
                {topicInfo.topicDesc ? (
                  <div className={styles.headerboxText}>
                    {topicInfo.topicDesc}
                  </div>
                ) : null}
              </div>

              {/* 卡片 */}
              {isEmpty ? (
                <div className={styles.empty}>
                  <img src={require("../../images/Empty.png")} alt="" />
                  <div className={styles.emptyText}>暂无数据</div>
                </div>
              ) : (
                <>
                  <div className={styles.cardBox}>
                    {cardList.map((item) => (
                      <Card
                        key={item.articleId}
                        articleList={item}
                        refreshPage={refreshPage}
                      ></Card>
                    ))}
                  </div>

                  <div className={styles.Pagination}>
                    {/*<ConfigProvider locale={zhCN}>*/}
                    <Pagination
                      showQuickJumper
                      showSizeChanger={false}
                      current={pageNumber}
                      total={totalCount}
                      onChange={onChange}
                      disabled={totalCount < 10}
                    />
                    {/*</ConfigProvider>*/}
                  </div>
                </>
              )}
            </div>
          </div>
        </Spin>
      </div>
    </PageWrapper>
  );
};
