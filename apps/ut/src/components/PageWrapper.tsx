/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-17 17:42:18
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 19:49:05
 * @FilePath: /voice-portal-pc-base/Users/chenzhen220/Documents/projects/体验门户/voice-portal-pc-ut/src/components/AutoNavigate.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./index.module.scss";

// 此组件用于监听基座下发的跳转指令
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.microApp?.addDataListener((data: { path: string }) => {
      // 当基座下发path时进行跳转
      console.log("nav", data.path);
      if (data.path && data.path !== location.hash.slice(1)) {
        navigate(data.path);
        window.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <div>
      <div className={Styles.pageContent}>{children}</div>
      <div className={Styles.copyRight}>
        Copyright @2004 2022 JD.COM 京东版权所有 Powered by 客户体验与服务部
      </div>
    </div>
  );
};
export default PageWrapper;
