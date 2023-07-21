export default function Page({params}: { params: { cat: string[] } }) {
  console.log('动态路由获取到的参数：' + params.cat)
  return <h1>第二种 动态路由获取到的参数 {params.cat}</h1>
}