/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 15:03:35
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:22:49
 * @FilePath: /体验门户/voice-portal-pc-ut/src/service/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request'
// 测试api
export interface IUserInfo {
    name: string
    age: number
}
export function getInfo(): Promise<IUserInfo> {
    return request({
      url: '/api/user/info',
      method: 'get'
    })
}