/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-27 17:19:38
 * @FilePath: /voice-portal-pc-ut/src/pages/MyCenter/MyComment/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Comment from "../components/Comment";
import noData from "@/images/myCenter/no-data.svg";
import PaginationWrapper from "../components/Pagination";
import styles from "./index.module.scss";
const { commentWrapper, paginationWrapper, noDataImg, noDataWrapper, noInfo } =
  styles;
const MyComment: React.FC = () => {
  const data = "";
  const handleCurrentPageSize = (page: number) => {
    console.log(page);
  };
  return (
    <>
      {data.length > 0 ? (
        <div className={commentWrapper}>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <div className={paginationWrapper}>
            <PaginationWrapper
              handleCurrentPageSize={handleCurrentPageSize}
            ></PaginationWrapper>
          </div>
        </div>
      ) : (
        <div className={noDataWrapper}>
          <img className={noDataImg} src={noData} alt="" />
          <span className={noInfo}>暂无数据</span>
        </div>
      )}
    </>
  );
};

export default MyComment;
