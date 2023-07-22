import React from "react";
import {Metadata} from 'next'
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/dashboard/error";
import {RootLayoutError} from "next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
  return (
    <section>
      <h1>dashboard layout</h1>
      {children}
    </section>
  )
}