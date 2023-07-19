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
            <Link href="/dashboard/analytics">analytics</Link>
        </>
    )
}