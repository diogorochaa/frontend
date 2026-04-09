'use client'

import { navData } from '@/app/config/Nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 md:right-[2%] z-50 w-full md:w-16 md:max-w-md md:h-screen">
      <div className="flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4 md:px-6 h-[80px] md:h-max py-8 backdrop-blur-sm bg-white/10 text-3xl md:text-xl md:rounded-full">
        {navData.map((item, index) => (
          <Link
            data-active={pathname === item.path}
            className="data-[active=true]:text-accent relative flex items-center group hover:text-accent transition-all duration-300"
            href={item.path}
            key={index}
          >
            <div className="absolute pr-14 right-0 hidden md:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounde-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {item.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>
            <div>{item.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
