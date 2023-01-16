/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:30:18
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-12 14:43:48
 * @FilePath: /体验门户/voice-portal-pc-ut/src/pages/Home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { Avatar, Carousel } from "antd";
import { Link } from "react-router-dom";
import Card from "@/components/Card";
import welcomeUrl from "./welcome.png";
import { TABKEY } from "../MyCenter";
import Scroll from "@/components/Scroll";
import {
  getHomeList,
  IArticleInfo,
  IArticleList,
  getMyInfo,
  IPersonalInfo,
} from "@/service/home";

const {
  carouselWrapper,
  carouselContainer,
  carousel,
  imgWrapper,
  personalCard,
  cardContent,
  cardFooter,
  personalTitle,
  personalPage,
  department,
  btn,
  bold,
  content,
  recommend,
  recommendTitle,
} = Styles;
const Home: React.FC = () => {
  const [slides] = useState([welcomeUrl]);
  console.log(1111,slides);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const [articles, setArticles] = useState<IArticleInfo[]>([]);
  let pageNumber = 1;
  let loading = false;
  let hasMore = true;

  const loadMore = () => {
    if (!hasMore || loading) return;
    loading = true;
    getHomeList({ pageNumber, pageSize: 10 })
      .then((res) => {
        const response = res as any as IArticleList;
        if (response?.result?.articleList?.length) {
          setArticles((arcs) => {
            arcs.push(...response.result.articleList);
            return [...arcs];
          });
        }
        hasMore = response.totalCount > pageNumber * 10;
        pageNumber++;
      })
      .finally(() => {
        loading = false;
      });
  };

  const [userInfo, setUserInfo] = useState<IPersonalInfo | null>(null);

  useEffect(() => {
    loadMore();
    getMyInfo().then((res) => {
      setUserInfo(res as any as IPersonalInfo);
    });
  }, []);

  return (
    <PageWrapper>
      <Scroll onEnd={loadMore}>
        <div className={carouselWrapper}>
          <div className={carouselContainer}>
            <Carousel afterChange={onChange} className={carousel}>
              {slides.map((url) => (
                <div key={url} className={imgWrapper}>
                  <img src={url} />
                </div>
              ))}
            </Carousel>
            <div className={personalCard}>
              <div className={cardContent}>
                <div className={personalTitle}>
                  <div>
                    <Avatar size={51} src={userInfo?.headImg} />
                    <span style={{ marginLeft: "12px" }}>
                      {userInfo?.realName}
                    </span>
                  </div>
                  <Link
                    to="mycenter/collect"
                    state={TABKEY.COLLECT}
                    className={personalPage}
                  >
                    <i className="font_family icon-frame"></i>
                    <span style={{ marginLeft: "5px" }}>个人主页</span>
                  </Link>
                </div>
                <div className={department}>
                  {userInfo?.organizationFullName}
                </div>
              </div>
              <div className={cardFooter}>
                <Link
                  to="mycenter/collect"
                  state={TABKEY.COLLECT}
                  className={btn}
                >
                  <div className={bold}>{userInfo?.collectNum || 0}</div>
                  <div>收藏</div>
                </Link>
                <Link
                  to="mycenter/subscribe"
                  state={TABKEY.SUBSCRIBE}
                  className={btn}
                >
                  <div className={bold}>{userInfo?.subscribeNum || 0}</div>
                  <div>订阅</div>
                </Link>
                <Link
                  to="mycenter/comment"
                  state={TABKEY.COMMENT}
                  className={btn}
                >
                  <div className={bold}>{userInfo?.commentNum || 0}</div>
                  <div>评论</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={content}>
          <div className="scrollList">
            {articles.map((item, index) => (
              <>
                <Card
                  key={index}
                  articleList={item}
                  refreshPage={location.reload.bind(location)}
                />
              </>
            ))}
          </div>
          <div className={recommend}>
            <div className={recommendTitle}>体验天下闻</div>
            <ul>
              <li>
                <span>01</span>
                <a
                  href="https://joyspace.jd.com/file/LoNBI2GWnhzcHXpb4z1e"
                  rel="noreferrer"
                  target="_blank"
                >
                  双11节奏玩法｜淘宝天猫、苏宁易购、京东
                </a>
              </li>
              <li>
                <span>02</span>
                <a
                  href="https://joyspace.jd.com/file/WltDP4i8hTzjdlS9F7ns"
                  rel="noreferrer"
                  target="_blank"
                >
                  05后消费趋势洞察报告
                </a>
              </li>
              <li>
                <span>03</span>
                <a
                  href="https://joyspace.jd.com/file/7FlCP3w7648FFs2evpze"
                  rel="noreferrer"
                  target="_blank"
                >
                  Z世代家电消费及内容兴趣报告
                </a>
              </li>
              <li>
                <span>04</span>
                <a
                  href="https://joyspace.jd.com/file/pab6FA1ybxxw2Ww95gJd"
                  rel="noreferrer"
                  target="_blank"
                >
                  双十一动态，行业竞对打法动态
                </a>
              </li>
              <li>
                <span>05</span>
                <a
                  href="https://joyspace.jd.com/file/7SSV1KUkfU0TlJb3cFin"
                  rel="noreferrer"
                  target="_blank"
                >
                  品牌种草锦囊妙计
                </a>
              </li>
              <li>
                <span>06</span>
                <a
                  href="https://joyspace.jd.com/file/LywZvKHJZTFRwMqyhsgV"
                  rel="noreferrer"
                  target="_blank"
                >
                  2022年女性精致美学白皮书
                </a>
              </li>
              <li>
                <span>07</span>
                <a
                  href="https://joyspace.jd.com/file/NXoK0lxVJyP4BiN9BR4g"
                  rel="noreferrer"
                  target="_blank"
                >
                  电影票“退改签”成“老大难”?
                </a>
              </li>
              <li>
                <span>08</span>
                <a
                  href="https://joyspace.jd.com/file/bHp2PeYcTKFtOiUlGZcY"
                  rel="noreferrer"
                  target="_blank"
                >
                  2022年电商双十一生态洞察报告
                </a>
              </li>
              <li>
                <span>09</span>
                <a
                  href="https://joyspace.jd.com/file/DcBxWU0beZLDqqdL3dTY"
                  rel="noreferrer"
                  target="_blank"
                >
                  调味品品类报告-新国货研究院
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Scroll>
    </PageWrapper>
  );
};

export default Home;
