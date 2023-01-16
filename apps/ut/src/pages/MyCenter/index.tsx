/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-27 14:42:44
 * @FilePath: /voice-portal-pc-ut/src/pages/MyCenter/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { Avatar, Tabs } from "antd";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { getMyInfo, IPersonalInfo, ITabList } from "@/service/myCenter";
const {
  myBanner,
  tab,
  myInfo,
  info,
  name,
  avatar,
  department,
  cardWrapper,
  tabWrapper,
} = styles;
const { myCenterwrapper } = styles;
const COLLECT = "collect";
const SUBSCRIBE = "subscribe";
const COMMENT = "comment";
export const TABKEY = {
  COLLECT: "1",
  SUBSCRIBE: "2",
  COMMENT: "3",
};
const keyToPath = {
  "1": "collect",
  "2": "subscribe",
  "3": "comment",
};

const MyCenter: React.FC = () => {
  const [activeKey, setactiveKey] = useState(TABKEY.COLLECT);
  const navigate = useNavigate();
  const params = useLocation();
  const [userInfo, setUserInfo] = useState<IPersonalInfo | null>(null);
  const [tabList, setTabList] = useState<ITabList[] | any[]>([
    {
      label: `我的收藏(0)`,
      key: TABKEY.COLLECT,
    },
    {
      label: `我的订阅(0)`,
      key: TABKEY.SUBSCRIBE,
    },
    {
      label: `我的评论(0)`,
      key: TABKEY.COMMENT,
    },
  ]);

  useEffect(() => {
    getMyInfo().then((res: any) => {
      setUserInfo(res as any as IPersonalInfo);
      const tempList = [
        {
          label: `我的收藏(${res?.collectNum || 0})`,
          key: TABKEY.COLLECT,
        },
        {
          label: `我的订阅(${res?.subscribeNum || 0})`,
          key: TABKEY.SUBSCRIBE,
        },
        {
          label: `我的评论(${res?.commentNum || 0})`,
          key: TABKEY.COMMENT,
        },
      ];
      setTabList([...tempList]);
    });
  }, []);

  useEffect(() => {
    const { state, pathname } = params;
    state && setactiveKey(state); //主页跳转带参数
    pathname.includes(COLLECT) && setactiveKey(TABKEY.COLLECT); //浏览器前进后退跳转tab
    pathname.includes(SUBSCRIBE) && setactiveKey(TABKEY.SUBSCRIBE);
    pathname.includes(COMMENT) && setactiveKey(TABKEY.COMMENT);
  }, [params]);

  const onChange = (key: string) => {
    setactiveKey(key);
    navigate(`/mycenter/${keyToPath[key as keyof typeof keyToPath]}`);
  };

  return (
    <PageWrapper>
      <div className={myCenterwrapper}>
        <div className={myBanner}>
          <div className={myInfo}>
            <div className={avatar}>
              <Avatar size={80} src={userInfo?.headImg} />
            </div>
            <div className={info}>
              <div className={name}>{userInfo?.realName}</div>
              <div className={department}>{userInfo?.organizationFullName}</div>
            </div>
          </div>
        </div>
        <div className={tabWrapper}>
          <div className={tab}>
            <Tabs activeKey={activeKey} onChange={onChange} items={tabList} />
          </div>
        </div>
        <div className={cardWrapper}>
          <Outlet />
        </div>
        {/* <div className={pagination}>
        <PaginationWrapper></PaginationWrapper>
        </div> */}
      </div>
    </PageWrapper>
  );
};

export default MyCenter;
