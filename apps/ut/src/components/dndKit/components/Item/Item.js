/* eslint-disable react/prop-types */
/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-15 14:38:10
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-15 15:19:02
 * @FilePath: /closure/src/components/Item.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import React, { forwardRef } from "react";
import styles from "../SortItem/SortItem.module.scss";

export default forwardRef(({ id, ...props }, ref) => {
  const item = props.items.find((it) => it.topicId === id);
  return (
    <div
      {...props}
      ref={ref}
      className={styles.defaultStyle}
      style={{ opacity: 0.85 }}
    >
      <div className={styles.content}>{item.topicName}</div>
    </div>
  );
});
