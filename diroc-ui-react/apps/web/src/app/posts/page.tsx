import { client } from '@/lib/apollo'
import { GET_ALL_POSTS } from '@/fragments/getAllPosts'
import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading'

interface PostsProps {
  posts: {
    id: string
    title: string
    subtitle: string
    slug: string
    createdAt: string
    coverImage: {
      url: string
    }
    author: {
      name: string
    }
  }[]
}

async function getData(): Promise<PostsProps> {
  const { data } = await client.query<PostsProps>({
    query: GET_ALL_POSTS,
  })
  return data
}

export default async function Posts() {
  const data = await getData()

  return (
    <div className="mt-20 flex h-full w-full  flex-col items-center md:mt-0 md:h-screen md:justify-start ">
      <div className="mt-4">
        <Heading gradient size="md">
          Posts
        </Heading>
      </div>
      <div className="grid h-full grid-cols-1 md:grid-cols-3 md:items-start md:justify-start">
        {data.posts.map((post) => {
          return (
            <div
              className=" mb-20 flex flex-col items-center justify-center gap-6 p-4 md:mb-0  md:flex-row md:gap-0 "
              key={post.id}
            >
              <Card
                title={post.title}
                description={`Descrição: ${post.subtitle}`}
                image={post.coverImage.url}
                author={post.author.name}
                alt="post"
                url={`posts/${post.slug}`}
                target="_self"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
