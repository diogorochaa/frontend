import Link from 'next/link'

import { siteConfig, socialLinkConfig } from '@/config'

import { Layout } from '@/components/Layout'
import { List, ListItem } from '@/components/List'
import { Logo } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'

import { NavItem } from '@/models'

type FooterProps = {
  items: NavItem[]
}

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear()

  return (
    <Layout>
      <footer className="flex flex-col border-t border-violet-400 pb-4 pt-6">
        <div className="flex w-full justify-between pb-10">
          <div className="flex max-w-[8rem] flex-col gap-6 sm:max-w-xs">
            <Logo />
            <p className="text-bold text-xl">{siteConfig.title}</p>
          </div>

          <div className="flex max-w-[8rem] flex-col gap-6 sm:max-w-xs">
            <p className="text-bold text-xl">Social</p>

            <SocialMedia items={socialLinkConfig.mainNav} />
          </div>

          <div className="flex max-w-[8rem] flex-col gap-6 sm:max-w-xs">
            <p className="text-bold text-xl">Links</p>

            <List className="flex-col">
              {items.map((item) => (
                <ListItem key={item.href}>
                  <Link target="_blank" href={item.href}>
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <div className="mt-3 flex w-full items-center justify-center">
          <p className="mb-2 max-w-[18rem] text-center text-gray-100 sm:max-w-fit">
            Todos os direitos reservados © Diogo Rocha {fullYear}
          </p>
        </div>
      </footer>
    </Layout>
  )
}
