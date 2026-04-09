import clsx from 'clsx'
import styles from './text.module.css'
import React, { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg'

type TextProps = {
  children: ReactNode
  className?: string
  size?: Size
}

export const Text = ({ children, className, size }: TextProps) => {
  const sizeClass = size ? styles[size] : styles.md
  return <p className={clsx(className, sizeClass)}>{children}</p>
}
