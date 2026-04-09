import { Heading } from '../Heading'
import { Text } from '../Text'
import { Avatar } from '../Avatar'

import Link from 'next/link'
import { StaticImageData } from 'next/image'

type CardProps = {
  title: string
  description?: string
  image: string | StaticImageData
  author?: string
  alt: string
  url: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export const Card = ({
  title,
  description,
  image,
  author,
  url,
  target,
}: CardProps) => {
  return (
    <div className="flex h-full max-w-sm cursor-pointer flex-col rounded-md border-2 border-white p-4 shadow-xl  hover:animate-pulse hover:border-green-400  ">
      <Link target={target} href={url}>
        <Avatar
          width={400}
          height={200}
          src={image}
          alt={title}
          className="h-2/4 w-full"
        />
        <div className="px-6 py-4">
          <Heading gradient size="sm">
            {title}
          </Heading>
          <Text size="sm">Autor: {author}</Text>
          <Text size="sm">{description}</Text>
        </div>
      </Link>
    </div>
  )
}
