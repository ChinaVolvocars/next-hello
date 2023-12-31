import Link from "next/link";
import {Metadata} from "next";
import {Suspense} from "react";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Page',
}
export default function Page() {
  return (
    <>
      <h1>hello dashboard page</h1>
      <text className="border-gray-500 text-amber-500 text-5xl">希捷硬盘</text>
      <div>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/setting">
          <p className="text-amber-500 text-blue-400">设置页面</p>
        </Link>
      </div>

      <section>
        <Suspense fallback={<p>Loading feed...</p>}>
          <h1> PostFeed </h1>
        </Suspense>
        <Suspense fallback={<p>Loading weather...</p>}>
          <h1> Weather </h1>
        </Suspense>
      </section>
    </>
  )
}