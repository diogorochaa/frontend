import { HTMLAttributes } from 'react'

type ListProps = HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode
}

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <ul className="flex justify-between gap-3" {...rest}>
      {children}
    </ul>
  )
}
