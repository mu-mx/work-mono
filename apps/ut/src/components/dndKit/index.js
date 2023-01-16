/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortItem from "./components/SortItem/SortItem";
import Item from "./components/Item/Item";

function Index({ myTopicList, saveMyTopicList }) {
  const [list, setList] = useState([...myTopicList]);
  const [activeId, setActiveId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active && over && active.id != over.id) {
      setList((items) => {
        const oldIndex = items.findIndex((it) => it.topicId == active.id);
        const newIndex = items.findIndex((it) => it.topicId == over.id);
        const list = arrayMove(items, oldIndex, newIndex);
        saveMyTopicList(list);
        return list;
      });
    }
    setActiveId(null);
  };

  const handleDragStart = (e) => {
    setActiveId(e.active.id);
    setActiveIndex(list.findIndex((it) => it.topicId == e.active.id));
  };

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div>
        <SortableContext
          items={list}
          strategy={rectSortingStrategy}
          dragOverlay={null}
        >
          {list.map(({ topicId, topicName }) => (
            <SortItem key={topicId} id={topicId} activeIndex={activeIndex}>
              {topicName}
            </SortItem>
          ))}
        </SortableContext>
        <DragOverlay>
          {activeId ? <Item id={activeId} items={list}></Item> : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}

export default Index;
