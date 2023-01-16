/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:30:18
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 14:37:35
 * @FilePath: /体验门户/voice-portal-pc-ut/src/pages/Home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"
import { getInfo } from "@/service/home"
const Home:React.FC = () => {
    getInfo().then(res => {
        console.log('home fetch', res)
    })
    return <div>hello voice portal pc MT!</div>
}

export default Home