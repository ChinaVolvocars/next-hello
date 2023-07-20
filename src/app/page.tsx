"use client"
import Image from 'next/image'

import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter()
  return (
    <>
      <div>
        <Link href="/dashboard">Dashboard</Link>
        <button className={"bg-amber-300 ml-6"} type="button" onClick={() => router.push('/dashboard')}>Dashboard按钮</button>
      </div>
    </>
  )
}
