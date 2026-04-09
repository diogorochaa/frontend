import { Linkedin, Github, Instagram, BookAIcon } from 'lucide-react'
import Link from 'next/link'

export function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.linkedin.com/in/diogorochaa/'}
        className="hover:text-accent transition-all duration-300"
      >
        <Linkedin size={30} />
      </Link>
      <Link
        href={'https://github.com/diogorochaa'}
        className="hover:text-accent transition-all duration-300"
      >
        <Github size={30} />
      </Link>
      <Link
        href={'https://www.instagram.com/diogodev_/'}
        className="hover:text-accent transition-all duration-300"
      >
        <Instagram size={30} />
      </Link>
      <Link
        href={'https://blog-diogodev.vercel.app/'}
        className="hover:text-accent transition-all duration-300"
      >
        <BookAIcon size={30} />
      </Link>
    </div>
  )
}
