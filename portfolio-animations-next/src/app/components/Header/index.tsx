import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../assets/logo.png'
import { Socials } from '../Socials'

export function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 md:px-0 md:h-[90px]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 ">
          <Link href="/">
            <Image
              src={LogoImg}
              width={200}
              height={10}
              alt="logo"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}
