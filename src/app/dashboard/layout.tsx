import React from "react";
import {Metadata} from 'next'

export default function DashboardLayout({children}: { children: React.ReactNode }) {
  return (
    <section>
      <h1>dashboard layout</h1>
      {children}
    </section>
  )
}