/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:30:25
 * @LastEditors: chenglisuo1 chenglisuo1@jd.com
 * @LastEditTime: 2022-12-25 11:51:17
 * @FilePath: /体验门户/voice-portal-pc-ut/src/pages/About.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cardLabel.module.scss";
import { getJurisdiction, TopicResDTOList } from "@/service/VoiceHeadlines";
import { message } from "antd";
const { cardLabel } = styles;

/**
 * @param topicResDTOList
 * "topicResDTOList": [{
        "topicId": "01",
        "topicName": "专题名称",
        "topicDesc": "专题描述"
      }]
*/

interface ListData {
  topicResDTOList: Array<TopicResDTOList>;
  refreshPage?: any;
  oneRow?: boolean;
}

export default ({ topicResDTOList, refreshPage, oneRow = false }: ListData) => {
  //getArticleListData
  const toSpecialNavigate = useNavigate();

  //点击标签跳转至对应的专题
  const toSpecial = (topicId: number) => {
    //跳转之前去获取路由，来判断是否是当前页面，再选择取值方式
    getJurisdiction(topicId).then((res) => {
      if (res) {
        toSpecialNavigate(`/voice/${topicId}`);
        refreshPage?.();
      } else {
        message.error("您暂无权限访问该页面");
      }
    });
  };

  const style: React.CSSProperties = oneRow
    ? {
        overflow: "hidden", //溢出内容隐藏
        whiteSpace: "pre",
      }
    : {};

  return (
    <div className={cardLabel} style={style}>
      {topicResDTOList.map((item: TopicResDTOList) => (
        <span
          key={item.topicId}
          onClick={(e) => {
            e.stopPropagation();
            toSpecial(item.topicId);
          }}
        >
          {item.topicName}
        </span>
      ))}
    </div>
  );
};
