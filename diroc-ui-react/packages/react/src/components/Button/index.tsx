import React, { HtmlHTMLAttributes } from 'react'

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white"
      {...props}
    >
      {children}
    </button>
  )
}
