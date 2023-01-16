/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-17 17:42:18
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 17:47:12
 * @FilePath: /voice-portal-pc-base/Users/chenzhen220/Documents/projects/体验门户/voice-portal-pc-ut/src/components/AutoNavigate.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// 此组件用于监听基座下发的跳转指令
const NavigatorFromBaseApp = () => {
    const navigate = useNavigate()

    useEffect(() => {
      window.microApp?.addDataListener((data: {path: string}) => {
        // 当基座下发path时进行跳转
        if (data.path && data.path !== location.pathname) {
          navigate(data.path)
        }
      })
    }, [history])

    return null
}
export default NavigatorFromBaseApp
