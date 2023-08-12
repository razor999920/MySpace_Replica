import './globals.css'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'
import AuthProvider from "@/app/AuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'myspace',
  description: 'Clone of myspace app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <NavMenu />

            {children}
          </body>
        </html>
      </AuthProvider>
  )
}
