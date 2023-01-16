<!--
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-15 20:18:46
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-16 10:42:32
 * @FilePath: /体验门户/voice-portal-pc-ut/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<h1 align="center">京东零售体验门户</h1>

### 📦 Install

```bash
1. yarn
2. yarn start
3. 构建 yarn build， 输入目录为 build
```

### 🔨 Usage

#### 🏷 Version Management

#### ⚙️ EnvironmentSet Variable

| 环境 | 变量维护文件 |  本地启动命令   |  打包命令   |
| :--- | :----------: | :-------------: | :-------------: |
| 开发 | .env.development    |   yarn start    | yarn build |
| 预发 | .env.production     | yarn start:pre  | yarn build:pre  |
| 线上 |  .env.production   | yarn start:prod |   yarn build:prod    |
