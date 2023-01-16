/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-17 18:23:23
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 18:30:19
 * @FilePath: /voice-portal-pc-base/Users/chenzhen220/Documents/projects/体验门户/voice-portal-pc-mt/src/pages/Layout/menus.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const menus = [
    {
        name: '商家流程中心',
        path: '/workflows',
    },
    {
        name: '商家管理',
        path: '/venders',
    },
    {
        name: '商品管理',
        path: '/products',
    },
    {
        name: '业务配置中心',
        path: '/configCenter',
    },
];
interface IMenu{
    name: string
    path?: string
    url?: string
    childs?: IMenu[]
    children?: IMenu[]
}
export {menus};
export type {IMenu};