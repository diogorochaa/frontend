import { ElementType } from 'react'

interface TextInputIconProps {
  icon: ElementType
}

export function TextInputIcon({ icon: Icon }: TextInputIconProps) {
  return <Icon className="w-6 h-6 text-zinc-100 " />
}
