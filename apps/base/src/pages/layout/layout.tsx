/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-17 15:39:53
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-24 16:33:14
 * @FilePath: /voice-portal-pc-base/src/pages/layout/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigator from "@/components/Navigator/Navigator";
import { getMyInfo, IPersonalInfo } from "@/service/home";

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState<IPersonalInfo | null>(null);

  useEffect(() => {
    getMyInfo().then((res) => {
      const personalInfo = res as any as IPersonalInfo;
      setUserInfo(personalInfo);
    });
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/ut", { replace: true });
    }
  }, [location]);

  return (
    <>
      <Navigator realName={userInfo?.realName || ""} />
      <Outlet />
    </>
  );
};

export default Layout;
