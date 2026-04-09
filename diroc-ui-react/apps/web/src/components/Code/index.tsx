'use client'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type CodeProps = {
  children: ReactNode
}

export default function Code({ children }: CodeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="h-4 w-4 rounded-full bg-red-500" />
        <div className="h-4 w-4 rounded-full bg-yellow-500" />
        <div className="h-4 w-4 rounded-full bg-green-500" />
      </div>

      <motion.div
        initial={{
          x: -106,
          y: -106,
          rotate: 0,
        }}
        animate={{
          x: 0,
          y: 0,
          rotate: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="flex flex-col gap-2"
      >
        {children}
      </motion.div>
    </div>
  )
}
