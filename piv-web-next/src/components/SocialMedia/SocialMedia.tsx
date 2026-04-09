import { List, ListItem } from '@/components/List'

import { NavItem } from '@/models'
import Link from 'next/link'

type SocialMediaProps = {
  items: NavItem[]
}

export const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <List className="flex-col">
      {items.map((item) => (
        <ListItem key={item.title}>
          <Link className="flex items-center" href={item.href}>
            {item?.icon}
            <p className="ml-1">{item.title}</p>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}
