/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 10:24:16
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 19:21:00
 * @FilePath: /体验门户/voice-portal-pc-ut/declaration.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.scss' {
  const style: any
  export default style
}
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare interface Window {
  __MICRO_APP_BASE_ROUTE__?: string
  microApp?: any
}