import { Avatar } from '@/components/Avatar'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { GET_HOME_DATA } from '@/fragments/getHomeData'
import { client } from '@/lib/apollo'

interface HomeProps {
  homes: {
    id: string
    title: string
    description: string
    perfil: {
      url: string
    }
  }[]
}

async function getData(): Promise<HomeProps> {
  const { data } = await client.query<HomeProps>({
    query: GET_HOME_DATA,
  })
  return data
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="mt-16 h-full w-full items-center justify-center p-2 md:mt-0 md:p-0">
      {data?.homes.map((home) => (
        <div
          className="flex flex-col items-center justify-center gap-6 p-4 md:h-2/3 md:flex-row md:gap-4 lg:h-screen lg:gap-5 "
          key={home.id}
        >
          <div className="mb-20 hidden w-full items-center md:mb-0 md:block md:w-1/3">
            <Avatar
              width={500}
              height={500}
              src={home.perfil.url}
              alt="perfil"
              className="rounded-full border-4 border-green-400 shadow-xl"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-3 md:w-1/3">
            <Heading size="md" gradient>
              {home.title}
            </Heading>
            <Text>{home.description}</Text>
          </div>
        </div>
      ))}
    </div>
  )
}
