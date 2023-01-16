import React, { useEffect, useRef } from "react";
import Styles from "./index.module.scss";
const { indic } = Styles;

interface IScrollLoadProps {
  children: React.ReactNode;
  onEnd?: () => void;
}
interface IEntry {
  intersectionRatio: number;
  isIntersecting: boolean;
}
const Scroll = (props: IScrollLoadProps) => {
  const indicator = useRef(null);

  const observer = new IntersectionObserver((entries: IEntry[]) => {
    if (entries[0].intersectionRatio > 0) {
      console.log("load more", entries[0].intersectionRatio);
      props.onEnd && props.onEnd();
    }
  });

  useEffect(() => {
    if (indicator.current) {
      observer.observe(indicator.current);
      return () => {
        if (indicator.current) {
          observer.unobserve(indicator.current);
        }
      };
    }
  }, []);

  return (
    <div>
      <div>{props.children}</div>
      <div className={indic} ref={indicator}></div>
    </div>
  );
};

export default Scroll;
