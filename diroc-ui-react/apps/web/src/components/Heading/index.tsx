import clsx from 'clsx'
import styles from './heading.module.css'
import React, { ReactNode } from 'react'

type Size = 'sm' | 'md' | 'lg'

type HeadingProps = {
  children: ReactNode
  className?: string
  animate?: boolean
  size?: Size
  gradient?: boolean
}

export const Heading = ({
  children,
  gradient,
  className,
  size,
}: HeadingProps) => {
  const sizeClass = size ? styles[size] : styles.md

  return (
    <h1 className={clsx(className, sizeClass, gradient && styles.textGradient)}>
      {children}
    </h1>
  )
}
