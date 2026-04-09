'use client'
import Image, { ImageProps, StaticImageData } from 'next/image'
import clsx from 'clsx'
import styles from './Avatar.module.css'

type AvatarProps = ImageProps & {
  alt: string
  animate?: boolean
  src: StaticImageData | string
  height: number
  width: number
  className?: string
}

export const Avatar = ({
  src,
  alt,
  animate,
  height,
  width,
  className,
}: AvatarProps) => {
  return (
    <Image
      className={clsx(animate && styles.imgAnimate, className)}
      alt={alt}
      src={src}
      height={height}
      width={width}
    />
  )
}
