import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";
import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Spin />
    </div>
  );
};

const LazyLoad = (loader: () => Promise<any>) => {
  return Loadable({
    loader,
    loading: Loading,
  });
};

export default LazyLoad;
