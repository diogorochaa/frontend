import { SiteType } from '@/models'
import Image from 'next/image'
import { Actions } from './Actions/Actions'

type ProfileProps = {
  items: SiteType
}

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="rounded-full"
        src="/assets/images/logo.png"
        alt="profile image"
        width={150}
        height={150}
        title="profile image"
        priority
      />

      <h1 className=" my-3 text-8xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600">
        {items.title}
      </h1>
      <p className="text-2xl">{items.subtitle}</p>
      <Actions />
    </div>
  )
}
