import { siteConfig } from '@/config'

import { Profile } from '@/components/Profile'

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/image-post.jpeg',
      },
    ],
  },
  robots: 'follow,index',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/image-post.jpeg`],
  },
}

export default function Home() {
  return (
    <main>
      <div className="my-10">
        <Profile items={siteConfig} />
      </div>
    </main>
  )
}
