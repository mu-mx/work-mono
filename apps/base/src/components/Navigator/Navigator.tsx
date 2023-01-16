/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-24 14:44:13
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-25 14:49:34
 * @FilePath: /voice-portal-pc-base/src/components/Navigator.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import microApp from "@micro-zoe/micro-app";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import LogoUrl from "./BrandVision.png";
import { LOGOUT_URL } from "@/constants";

const { navWrapper, nav, logo, menuList, personalInfo, name, logout, navWrap } =
  styles;

interface IProps {
  realName: string;
}
const Navigator: React.FC<IProps> = (props) => {
  const routerChange = (app: string, path: string) => {
    microApp.setData(app, { path });
  };

  return (
    <div className={navWrapper}>
      <div className={nav}>
        <img src={LogoUrl} className={logo} alt="" />

        <div className={navWrap}>
          <ul className={menuList}>
            <li>
              <NavLink to="ut" end onClick={() => routerChange("ut", "/")}>
                首页
              </NavLink>
            </li>
            <li>
              <NavLink
                to="ut/voice"
                onClick={() => routerChange("ut", "/voice")}
              >
                声音头条
              </NavLink>
            </li>
            <li>
              <a href="http://cep.jd.com" rel="noreferrer" target="_blank">
                体验问题
              </a>
            </li>
            <li>
              <a href="https://yunting.jd.com" rel="noreferrer" target="_blank">
                云听
              </a>
            </li>
            <li>
              <NavLink to="mt" end onClick={() => routerChange("mt", "/")}>
                运营管理
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={personalInfo}>
          <span className={name}>{props.realName}</span>
          <a href={LOGOUT_URL} className={logout}>
            <i className="font_family icon-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
