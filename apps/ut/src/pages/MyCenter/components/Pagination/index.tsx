/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-23 16:35:23
 * @FilePath: /voice-portal-pc-ut/src/components/MyCenter/Pagination/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Pagination, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styles from "./index.module.scss";
const { pageWrapper } = styles;
import type { PaginationProps } from "antd";
interface PaginationWrapper {
  totalCount?: number | undefined;
  pageNumber?: number | undefined;
  pageSize?: number | undefined;
  [key: string]: any;
  handleCurrentPageSize: (page: number, pageSize: number) => void;
}
const PaginationWrapper: React.FC<PaginationWrapper> = ({
  handleCurrentPageSize,
  totalCount = 0,
  pageNumber = 1, //页码
  pageSize = 10, //页数量
}) => {
  const handlePageSize: PaginationProps["onChange"] = (
    pageNumber: number,
    pageSize: number
  ) => {
    // pageNumber：页码，pageSize：页数
    handleCurrentPageSize && handleCurrentPageSize(pageNumber, pageSize);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div className={pageWrapper}>
        <Pagination
          defaultPageSize={pageSize}
          defaultCurrent={pageNumber}
          total={totalCount}
          showSizeChanger={false}
          showQuickJumper
          onChange={handlePageSize}
        />
      </div>
    </ConfigProvider>
  );
};
export default PaginationWrapper;
