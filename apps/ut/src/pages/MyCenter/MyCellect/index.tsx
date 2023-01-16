/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-27 17:23:24
 * @FilePath: /voice-portal-pc-ut/src/pages/MyCenter/MyCellect/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import styles from "./index.module.scss";
import noData from "@/images/myCenter/no-data.svg";
import PaginationWrapper from "../components/Pagination";
import { getCollectArticleInfo, IArticleInfo } from "@/service/myCenter";
const { collectWrapper, paginationWrapper, noDataImg, noInfo, noDataWrapper } =
  styles;
import { Spin } from "antd";

const MyCollect: React.FC = () => {
  const [currentList, setCurrentList] = useState<IArticleInfo[]>([]); //当前页面需要展示的数据
  const [totalCount, settotalCount] = useState(0); //总条数
  const [pageNumber, setpageNumber] = useState(1); //第几页
  const [pageSize, setPageSize] = useState<number>(10); //页数
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    _getCollectArticleInfo(); //获取收藏列表
    // console.log(3333333)
  }, [pageNumber]);
  //监听页码变化
  const _getCollectArticleInfo = () => {
    getCollectArticleInfo(pageSize as number, pageNumber as number)
      .then((res: any) => {
        settotalCount(res?.totalCount);
        setCurrentList([...(res?.result || [])]);
      })
      .catch(() => setLoading(false))
      .finally(() => setLoading(false));
  };
  const handleCurrentPageSize = (pageNumber: number, pageSize: number) => {
    //pageNumber：页码，pageSize：页数
    setPageSize(pageSize);
    setpageNumber(pageNumber);
  };
  //刷新页面
  const refreshPage = () => {
    location.reload();
  };
  return (
    <>
      <Spin spinning={loading}>
        {currentList?.length > 0 ? (
          <div className={collectWrapper}>
            {currentList?.map((item: IArticleInfo) => {
              return (
                <Card
                  key={item?.articleId}
                  articleList={item}
                  refreshPage={refreshPage}
                  blank
                ></Card>
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

export default MyCollect;
