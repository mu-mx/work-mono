/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:30:18
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-24 20:23:22
 * @FilePath: /体验门户/voice-portal-pc-ut/src/pages/Home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { getSubProjectUrl } from "@/utils/util";

const MT: React.FC = () => {
  const mt = getSubProjectUrl("mt");
  console.log("mt", mt);
  return (
    <div>
      <micro-app name="mt" url={mt} baseroute="/mt"></micro-app>
    </div>
  );
};

export default MT;
