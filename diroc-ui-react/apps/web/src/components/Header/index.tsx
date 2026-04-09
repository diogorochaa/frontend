'use client'
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Heading } from '../Heading'

export const Header = () => {
  const pathname = usePathname()
  const headerStyle = useCallback(
    (path: string) => {
      const defaultStyle =
        ' text-lg  p-4 hover:bg-gray-700 border-b md:border-none border-gray-600'
      const activeStyle =
        'text-lg font-bold p-4 border-b  border-green-400 text-green-400 '
      if (pathname === path) {
        return activeStyle
      } else {
        return defaultStyle
      }
    },
    [pathname],
  )
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between border-b border-green-400 px-4 text-white">
      <Link href="/">
        <Heading gradient>Diogo.Dev</Heading>
      </Link>
      <ul className="hidden md:flex">
        <Link href="/" className={headerStyle('/')}>
          Inicio
        </Link>
        <Link className={headerStyle('/posts')} href="/posts">
          Postagens
        </Link>
        <Link className={headerStyle('/about')} href="/about">
          Sobre
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 flex h-full w-[60%] flex-col border-r border-r-gray-900 bg-gray-800  duration-500 ease-in-out'
            : 'fixed left-[-100%] flex flex-col duration-200 ease-in'
        }
      >
        <Heading className="p-4" size="sm">
          Diogo.Dev
        </Heading>
        <Link href="/" className={headerStyle('/')}>
          Inicio
        </Link>
        <Link className={headerStyle('/posts')} href="/posts">
          Postagens
        </Link>
        <Link className={headerStyle('/about')} href="/about">
          Sobre
        </Link>
      </ul>
    </div>
  )
}
