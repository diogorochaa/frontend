import { HtmlHTMLAttributes } from 'react'

type Props = HtmlHTMLAttributes<HTMLDivElement>

export function Container(props: Props) {
  return (
    <section
      className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-52 px-10 py-16 md:flex-row"
      {...props}
    />
  )
}
