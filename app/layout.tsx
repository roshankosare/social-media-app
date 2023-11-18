import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/nav/Header'
import SideBar from '@/components/nav/SideBar'
import BottomBar from '@/components/nav/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social',
  description: 'welcome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SideBar/>
          {
            <div className='px-2 sm:px-2'>
              {
                children
              }
            </div>
          }
          <BottomBar/>
        </ThemeProvider>
      </body>
    </html>
  )
}
