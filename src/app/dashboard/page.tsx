import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Page',
}
export default function Page() {
  return (
    <>
      <h1>hello dashboard page</h1>
      <div>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/setting">
          <p className="text-amber-500 text-blue-400">设置页面</p>
        </Link>
      </div>
    </>
  )
}