import { RichText } from '@graphcms/rich-text-react-renderer'
import { ElementNode } from '@graphcms/rich-text-types'

import { GET_POST } from '@/fragments/getPost'
import { client } from '@/lib/apollo'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import Code from '@/components/Code'

interface PostProps {
  post: {
    id: string
    title: string
    coverImage: {
      url: string
    }

    author: {
      name: string
    }
    createdAt: string
    content: {
      json: ElementNode[]
    }
  }
}

interface ParamsProps {
  params?: {
    slug: string
  }
}

async function getData({ params }: ParamsProps): Promise<PostProps> {
  const { data } = await client.query<PostProps>({
    query: GET_POST,
    variables: {
      slugPost: params?.slug,
    },
  })
  return data
}

export default async function Post({ params }: ParamsProps) {
  const data = await getData({ params })

  return (
    <div className=" mt-16 flex w-full flex-col items-center justify-center gap-8 md:mt-0 md:h-screen md:justify-start">
      <header className="m-0 mt-10 border-b-2  border-white pb-4 text-lg font-bold">
        <Heading className="pb-4">{data?.post.title}</Heading>
        <Text size="sm">Autor: {data?.post.author.name}</Text>
      </header>
      <div className="p-8 md:w-[60%] md:border-2 md:border-green-400">
        <Code>
          <RichText
            content={data.post.content.json}
            renderers={{
              p: ({ children }) => (
                <Text className="text-justify " size="sm">
                  {children}
                </Text>
              ),
            }}
          />
        </Code>
      </div>
    </div>
  )
}
