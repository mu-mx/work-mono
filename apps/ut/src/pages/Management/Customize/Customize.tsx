
import React from "react";
import styles from "./style.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { Table } from "antd";

const { red, txt } = styles;

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

export default () => {
  return (
    <div className={styles.right}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
