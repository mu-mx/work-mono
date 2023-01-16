/*
 * @Author: chenglisuo1 chenglisuo1@jd.com
 * @Date: 2022-12-05 10:17:02
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-27 14:57:41
 * @FilePath: /voice-portal-pc-ut/src/components/MyCenter/Topic/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./index.module.scss";
import cancel from "@/images/myCenter/cancel.svg";
const { topicWrapper, name, left, describe, right, coverStyle } = styles;
import { SubscribeList } from "@/service/myCenter";
interface topicWrapper {
  item: SubscribeList;
  _unSubscribeList: (item: SubscribeList) => void;
}
import { Link } from "react-router-dom";
const Topic: React.FC<topicWrapper> = ({ _unSubscribeList, item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e?: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(true);
  };
  // const refreshPage = () => {
  //   location.reload();
  // };
  const handleOk = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(false);
    _unSubscribeList(item);
  };

  const handleCancel = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <Link to={`/voice/${item?.topicId}`} target="_blank" rel="noreferrer">
      <div className={topicWrapper}>
        <div className={left}>
          <div className={name}>{item?.topicName}</div>
          <div className={describe}>{item?.topicDesc}</div>
        </div>
        {item?.isPublic === 0 ? (
          <div className={right} onClick={showModal}>
            取消订阅
          </div>
        ) : null}

        <Modal
          className={coverStyle}
          title="取消订阅"
          okText="确认"
          cancelText="取消"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            <img src={cancel} alt="" style={{ marginRight: "12px" }}></img>
            您确定要取消订阅该专题吗？
          </p>
        </Modal>
      </div>
    </Link>
  );
};

export default Topic;
