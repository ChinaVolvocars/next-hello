import React from "react";
import {Metadata} from 'next'
export default function DashboardLayout({children}: { children: React.ReactNode }) {
    return (
        <section>
            <nav></nav>
            {children}
        </section>
    )
}