'use client'

import Link from 'next/link'

import { NavItem } from '@/models'

import { ToggleButton } from './components'
import { useMainNav } from './hooks'

type MainNavProps = {
  items: NavItem[]
}

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav()

  return (
    <>
      <nav className="items-center justify-between hidden lg:flex">
        <ul className="flex gap-4">
          {items.map((item) => (
            <li
              className="text-md transition-colors duration-300 ease-in-out hover:text-violet-400"
              key={item.title}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="z-50 flex transition-colors duration-300 hover:text-link lg:hidden">
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      {isOpenMenu && (
        <div className="fixed left-0 top-0 z-30 min-h-screen w-full overflow-hidden bg-zinc-600/80 pt-[4rem]">
          <nav className="mx-auto flex max-w-[80%] items-center justify-center rounded-2xl border border-violet-400 bg-secundary py-3 shadow-2xl">
            <div className="w-full flex-col px-4">
              {items.map((item) => (
                <div
                  className=" border-b border-violet-400 py-3"
                  key={item.title}
                >
                  <Link className="text-white" href={item.href}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
