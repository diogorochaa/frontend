import Image from 'next/image'
import Link from 'next/link'
import RoundedTextImage from '../../assets/rounded-text.png'
import { ArrowRight } from 'lucide-react'

export function ProjectsBtn() {
  return (
    <div className="mx-auto md:mx-0">
      <Link
        href="/projects"
        className="relative w-[185px] h-[185px] flex justify-center items-center group"
      >
        <Image
          src={RoundedTextImage}
          width={141}
          height={148}
          alt="my projects"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <ArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
}
