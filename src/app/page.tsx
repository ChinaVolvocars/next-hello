"use client"
import Image from 'next/image'

import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div className={"flex flex-col"}>
        <Link className={"bg-lime-600"} href="/dashboard">Dashboard页面</Link>
        <button className={"bg-amber-300"} type="button" onClick={() => router.push('/dashboard')}>Dashboard按钮
        </button>
        <Link className={"bg-blue-500"} href={"/about"}>路由组(marketing) about页面</Link>
        <Link className={"bg-lime-600"} href={"/douyin"}>路由组(marketing) douyin页面</Link>
        <Link className={"bg-emerald-300"} href={"/cat"}>路由组(shop) cat页面</Link>
        <Link className={"bg-teal-400"} href={"/dog"}>路由组(shop) dog页面</Link>
      </div>
    </>
  )
}
