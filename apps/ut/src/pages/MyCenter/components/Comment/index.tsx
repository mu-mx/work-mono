import React from "react";
import { Avatar } from "antd";
import styles from "./index.module.scss";
const { commentWrapper, left, right, name, content, time, link, at } = styles;
const Commented: React.FC = () => {
  const viewText = () => {
    window.location.href = "";
  };
  return (
    <div className={commentWrapper}>
      <div className={left}>
        <Avatar size={30} />
      </div>
      <div className={right}>
        <div className={name}>小黄帽yy</div>
        <div className={content}>
          <span className={at}>回复:@小黄帽yy</span>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficie
        </div>
        <div className={time}> 2022-12-23 11:14</div>
        <div className={link} onClick={viewText}>
          查看原文
        </div>
      </div>
    </div>
  );
};

export default Commented;
