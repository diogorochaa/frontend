import { LiHTMLAttributes } from 'react'

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode
}

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li
      className="text-md relative px-2 font-light transition-colors duration-200 hover:text-violet-400"
      {...rest}
    >
      {children}
    </li>
  )
}
