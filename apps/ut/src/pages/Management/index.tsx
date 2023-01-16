import React, { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import styles from "./style.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import LazyLoad from "@/components/LazyLoad";

const Banner = LazyLoad(() => import("./Banner"));
const Customize = LazyLoad(() => import("./Customize"));

export default () => {
  const [type, setType] = useState("1");
  const nav = useNavigate();

  const onClick = (e: any) => {
    // nav(e.key);

    setType(e.key);
  };

  return (
    <PageWrapper>
      <div className={styles.wrap}>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={[type]}
          mode="inline"
          items={[
            {
              key: "1",
              label: "轮播图管理",
            },
            {
              key: "2",
              label: "自定义模块管理",
            },
            {
              key: "3",
              label: "专题管理",
            },
            {
              key: "4",
              label: "用户管理",
            },
            {
              key: "5",
              label: "订阅管理",
            },
            {
              key: "6",
              label: "推送管理",
            },
          ]}
        />
        {type === "1" && <Banner />}
        {type === "2" && <Customize />}
        {type === "4" && <Customize />}
        {type === "5" && <Customize />}
        {type === "6" && <Customize />}
      </div>
    </PageWrapper>
  );
};
