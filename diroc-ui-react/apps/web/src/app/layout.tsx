import React, { ReactNode } from 'react'
import '../styles/globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Blog Diogo.Dev',
  description: 'Blog de desenvolvimento web',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
