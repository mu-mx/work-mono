/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 09:30:25
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-16 10:44:30
 * @FilePath: /体验门户/voice-portal-pc-ut/src/pages/About.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import styles from './About.module.scss'
const {red, txt} = styles
export default () => {
    console.log(process.env)
    return <div className={red}><span className={txt}>red</span>About</div>
}
