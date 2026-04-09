import React from 'react'
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'
import { Heading } from '../Heading'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="mx-auto max-w-[1240px] gap-8 border-t-2 border-green-400 px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <Heading size="sm" className="text-green-400 ">
          Desenvolvido por Diogo Rocha
        </Heading>
        <div className="my-6 flex justify-center gap-2 ">
          <Link href="https://www.facebook.com/diogo.rocha.1042/">
            <FaFacebookSquare size={36} />
          </Link>
          <Link href="https://www.instagram.com/diogo_rochaaa/">
            <FaInstagram size={36} />
          </Link>
          <Link href="https://twitter.com/Diogo99R">
            <FaTwitterSquare size={36} />
          </Link>
          <Link href="https://github.com/diogorochaa">
            <FaGithubSquare size={36} />
          </Link>

          <Link href="https://www.linkedin.com/in/diogorochaa/">
            <FaLinkedin size={36} />
          </Link>
        </div>
      </div>
    </div>
  )
}
