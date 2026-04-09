import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
