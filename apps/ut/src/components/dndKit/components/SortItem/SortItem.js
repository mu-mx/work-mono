/* eslint-disable react/prop-types */
/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-15 11:02:44
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-15 15:51:55
 * @FilePath: /closure/src/components/SortItem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import styles from "./SortItem.module.scss";

export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, over, index } = useSortable({
    id: props.id,
  });

  const position =
    over?.id == props.id
      ? index - props.activeIndex > 0
        ? styles.after
        : styles.before
      : undefined;

  return (
    <div
      ref={setNodeRef}
      className={`${styles.defaultStyle} ${position}`}
      {...attributes}
      {...listeners}
    >
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
