import React from "react";
import {Metadata} from 'next'

export default function MarketingLayout({children}: { children: React.ReactNode }) {
  return (
    <div>
      <h1>路由组 Marketing Layout</h1>
      {children}
    </div>
  )
}