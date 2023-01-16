/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-25 14:20:39
 * @FilePath: /voice-portal-pc-ut/src/pages/MyCenter/MySubscribe/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import Topic from "../components//Topic";
import styles from "./index.module.scss";
import noData from "@/images/myCenter/no-data.svg";
import PaginationWrapper from "../components/Pagination";
import {
  getSubscribeList,
  unSubscribe,
  SubscribeList,
} from "@/service/myCenter";
import { Spin } from "antd";

import { useEffect } from "react";
const {
  subscribeWrapper,
  paginationWrapper,
  noDataImg,
  noInfo,
  noDataWrapper,
} = styles;

const MySubscribe: React.FC = () => {
  const [currentList, setCurrentList] = useState<SubscribeList[]>([]); //当前页面需要展示的数据
  const [totalCount, settotalCount] = useState(0); //总条数
  const [pageNumber, setpageNumber] = useState(1); //第几页
  const [pageSize, setPageSize] = useState<number>(10); //一页多少条
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    _getSubscribeList(); //获取订阅专题列表
  }, [pageNumber]);
  const _getSubscribeList = () => {
    getSubscribeList(pageSize as number, pageNumber as number)
      .then((res: any) => {
        settotalCount(res?.totalCount);
        setCurrentList([...(res?.result || [])]);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  };
  const _unSubscribeList = (item: SubscribeList) => {
    //取消订阅
    unSubscribe(item?.topicId).then(() => {
      location.reload();
    });
  };
  const handleCurrentPageSize = (pageNumber: number, pageSize: number) => {
    //pageNumber：页码，pageSize：页数
    setPageSize(pageSize);
    setpageNumber(pageNumber);
  };
  //刷新页面

  return (
    <>
      <Spin spinning={loading}>
        {currentList?.length > 0 ? (
          <div className={subscribeWrapper}>
            {currentList?.map((item: SubscribeList) => {
              return (
                <Topic
                  key={item?.topicId}
                  _unSubscribeList={_unSubscribeList}
                  item={item}
                  // refreshPage={refreshPage}
                ></Topic>
              );
            })}
            {totalCount < pageSize ? null : (
              <div className={paginationWrapper}>
                <PaginationWrapper
                  totalCount={totalCount}
                  pageNumber={pageNumber}
                  pageSize={pageSize}
                  handleCurrentPageSize={handleCurrentPageSize}
                ></PaginationWrapper>
              </div>
            )}
          </div>
        ) : loading ? null : (
          <div className={noDataWrapper}>
            <img className={noDataImg} src={noData} alt="" />
            <span className={noInfo}>暂无数据</span>
          </div>
        )}
      </Spin>
    </>
  );
};

export default MySubscribe;
