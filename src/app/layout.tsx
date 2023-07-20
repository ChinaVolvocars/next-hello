import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: '首页',
  description: '一个 next app 应用',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <nav>
      <h1>app layout</h1>
    </nav>
    {children}
    </body>
    </html>
  )
}
