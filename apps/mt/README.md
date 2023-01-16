<!--
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-15 20:18:46
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-16 10:42:32
 * @FilePath: /体验门户/voice-portal-pc-ut/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<h1 align="center">京东零售体验门户</h1>

<div align="center" style="display: flex;flex-wrap: wrap;align-items: center;justify-content: center;">

![react](https://img.shields.io/badge/React-%5E17.0.2-blue) ![react-dom](https://img.shields.io/badge/react--dom-%5E17.0.2-blue) ![react-router](https://img.shields.io/badge/react--router-%5E5.2.1-brightgreen) ![react-loadable](https://img.shields.io/badge/react--loadable-%5E5.5.0-green) ![zustand](https://img.shields.io/badge/zustand-%5E3.6.7-orange) ![dayjs](https://img.shields.io/badge/dayjs-%5E1.10.7-blue) ![axios](https://img.shields.io/badge/axios-%5E0.24.0-orange) ![ahooks](https://img.shields.io/badge/ahooks-%5E2.10.12-blueviolet) ![webpack](https://img.shields.io/badge/webpack-%5E5.64.4-blue) ![antd](https://img.shields.io/badge/antd-%5E4.17.2-lightgrey) ![@ant-design/pro-layout](https://img.shields.io/badge/%40ant--design%2Fpro--layout-%5E6.31.3-brightgreen) ![js-cookie](https://img.shields.io/badge/js--cookie-%5E3.0.1-red) ![qiankun](https://img.shields.io/badge/qiankun-%5E2.6.3-blueviolet) ![nanoid](https://img.shields.io/badge/nanoid-%5E3.2.0-brightgreen) ![dotenv-webpack](https://img.shields.io/badge/dotenv--webpack-%5E7.1.0-yellow) ![braft-editor](https://img.shields.io/badge/braft--editor-%5E2.3.9-critical) ![react-inlinesvg](https://img.shields.io/badge/react--inlinesvg-%5E2.3.0-ff69b4)

</div>

### 📦 Install

```bash

1. 切换内网源
yarn config set registry http://registry.m.jd.com
yarn config get registry // 若显示 http://registry.m.jd.com  代表切换成功
2. yarn
3. yarn start
4. 构建 yarn build， 输入目录为 dist
```

### 🔨 Usage

#### 🏷 Version Management

```bash
# 更多命令请参考standard-version文档
yarn release
```

#### ⚙️ EnvironmentSet Variable

| 环境 | 变量维护文件 |  本地启动命令   |  本地打包命令   |    线上打包命令    |
| :--- | :----------: | :-------------: | :-------------: | :----------------: |
| 测试 |  .env.test   |   yarn start    | yarn build:test | bash build.sh test |
| 预发 |   .env.pre   | yarn start:pre  | yarn build:pre  | bash build.sh pre  |
| 线上 |  .env.prod   | yarn start:prod |   yarn build    |   bash build.sh    |
