/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 15:12:54
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-16 15:28:16
 * @FilePath: /体验门户/voice-portal-pc-ut/config-overrides.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* craco.config.js */
const path = require('path');
console.log('craco config', path.resolve(__dirname, "src/"))
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@service": path.resolve(__dirname, "src/service"),
    },
  },
};