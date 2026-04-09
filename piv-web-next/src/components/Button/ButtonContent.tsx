interface ButtonContentProps {
  text: string
}

export function ButtonContent({ text }: ButtonContentProps) {
  return <p className="text-sm leading-relaxed text-zinc-100">{text}</p>
}
