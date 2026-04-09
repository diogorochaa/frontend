import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  success?: boolean
}

export function ButtonRoot({
  success = false,
  children,
  ...props
}: ButtonRootProps) {
  return (
    <button
      data-success={success}
      {...props}
      className={twMerge(
        'flex hover:bg-violet-400 items-center justify-center gap-2 bg-violet-600 rounded-full p-2 data-[success=true]:bg-emerald-500',
        props.className,
      )}
    >
      {children}
    </button>
  )
}
