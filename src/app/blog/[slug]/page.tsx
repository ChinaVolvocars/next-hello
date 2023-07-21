import {log} from "util";

export default function Page({params}: { params: { slug: string } }) {
  console.log('动态路由获取到的参数：' + params.slug)
  return <h1>第一种 动态路由获取到的参数 {params.slug}</h1>
}