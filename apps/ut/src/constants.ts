/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 11:07:33
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-16 15:33:42
 * @FilePath: /体验门户/voice-portal-pc-ut/src/constants.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const PAGE_SIZE = 10;

export enum RESPONSE_CODE {
  SUCCESS = 0,
}

const ERP_HOST = {
  dev: "http://ssa.jd.com",
  pre: "http://ssa.jd.com",
  prod: "http://ssa.jd.com",
};

export const LOGIN_URL =
  // @ts-ignore
  ERP_HOST[process.env.REACT_APP_MODE || "dev"] +
  `/sso/login?ReturnUrl=${encodeURIComponent(location.href)}`;
export const LOGOUT_URL =
  // @ts-ignore
  ERP_HOST[process.env.REACT_APP_MODE || "dev"] +
  `/sso/logout?ReturnUrl=${encodeURIComponent(location.host)}`;

export const API_CONFIG = {
  dev: "//beta-api.m.jd.com/api",
  // dev: "/",
  pre: "//beta-api.m.jd.com/api",
  prod: "//api.m.jd.com/api",
};
