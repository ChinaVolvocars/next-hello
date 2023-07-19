import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>hello dashboard page</h1>
            <Link href="/dashboard/analytics">analytics</Link>
        </>
    )
}