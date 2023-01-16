/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:45:58
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 18:34:22
 * @FilePath: /体验门户/voice-portal-pc-ut/src/router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./pages/Layout/layout";
export default [
  {
    path: "/",
    element: <Layout />,
    // children: [
    //     {
    //         path: '/',
    //         element: <Home/>
    //     },
    //     {
    //         path: '/about',
    //         element: <About />
    //     }
    // ]
  },
];
