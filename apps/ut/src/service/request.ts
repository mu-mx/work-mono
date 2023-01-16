/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 11:06:58
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:22:32
 * @FilePath: /体验门户/voice-portal-pc-ut/src/service/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import { message } from "antd";
import { RESPONSE_CODE, LOGIN_URL } from "@/constants";
import qs from "qs";
import { API_CONFIG } from "@/constants";
const service = axios.create({
  withCredentials: true,
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-type": "application/x-www-form-urlencoded",
  },
});
const params = {
  appid: "tiyan",
  loginType: 7,
  functionId: "experience_portal",
};
service.interceptors.request.use(
  (config) => {
    config.params = { ...params, ...(config.params || {}) };
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    console.log('res -> :', res)
    if (res.code == 1002 || res.code == 1005) {
      window.location.href = LOGIN_URL;
      console.log(LOGIN_URL);
    }
    if (res.code != RESPONSE_CODE.SUCCESS) {
      message.error(res.message || res.msg);
      return Promise.reject(res);
    }
    return Promise.resolve(res.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function (option: any) {
  if (option) {
    for (const key in option) {
      if (typeof option[key] == "undefined") {
        option[key] = "";
      }
    }
  }

  return service({
    method: "post",
    // @ts-ignore
    url: API_CONFIG[process.env.REACT_APP_MODE || "dev"],
    data: qs.stringify({
      body: JSON.stringify(option),
    }),
  });
}
