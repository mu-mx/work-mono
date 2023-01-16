/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 11:06:58
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:22:32
 * @FilePath: /体验门户/voice-portal-pc-ut/src/service/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { message } from 'antd'
import { RESPONSE_CODE, LOGIN_URL } from '@/constants'

const service = axios.create({
  // baseURL: 'http://voice.jd.com:3000/',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
})
service.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    },
  )

service.interceptors.response.use(
    (response) => {
      const res = response.data;
      if(res.code != RESPONSE_CODE.SUCCESS) {
          message.error(res.message)
          return Promise.reject(res)
      }
      return Promise.resolve(res.data)
    },
    (error) => {
        if(error.response?.status === 401) {
            window.location.href = LOGIN_URL
        }
        return Promise.reject(error)
    },
  )
  
  export default service