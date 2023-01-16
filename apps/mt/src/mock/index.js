/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 14:56:57
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:08:19
 * @FilePath: /体验门户/voice-portal-pc-ut/src/mock/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs'
if(process.env.NODE_ENV === 'development') {
    Mock.mock('/api/user/info', 'get', (options) => {
        console.log('options', options)
        return {
            code: 0,
            data: {
                name: 'jack',
                age: 20
            }
        }
    })
}
