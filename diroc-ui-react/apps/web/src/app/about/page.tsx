import { Avatar } from '@/components/Avatar'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import perfil from '../../../public/perfil.webp'
import logo from '../../../public/code.jpg'
import { Card } from '@/components/Card'

type ReposProps = {
  id: number
  name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
  html_url: string
}

async function fetcher(): Promise<ReposProps[]> {
  const res = await fetch(
    'https://api.github.com/users/diogorochaa/repos?q=tetris+language:javascript&sort=stars&order=desc',
  )
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`
    throw new Error(message)
  }
  return res.json()
}

export default async function About() {
  const data = await fetcher()
  return (
    <>
      <Container>
        <div className="mb-20 hidden w-full items-center md:mb-0 md:block md:w-1/3">
          <Avatar
            src={perfil}
            alt="Imagem de diogo rocha"
            animate
            width={500}
            height={500}
            className="rounded-full border-4 border-green-400 bg-green-400 shadow-xl"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-3 md:w-1/3">
          <Heading size="md" gradient>
            Sou Diogo Rocha!
          </Heading>
          <Text>
            Um desenvolvedor FrontEnd, cursando ciência da computação e
            aprendendo muito sobre tecnologia. Me especializando em sistemas
            acessíveis e de boa performance, atualmente estou usando algumas
            stacks como: React Js, Next Js, Typescript.
          </Text>
        </div>
      </Container>
      <section>
        <Heading gradient size="md">
          Projetos no Github
        </Heading>
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start md:justify-start md:gap-6">
            {data.map((item) => (
              <Card
                alt="Repositórios do Github"
                key={item.id}
                title={item.name}
                author={item.owner.login}
                image={logo}
                url={item.html_url}
                target="_blank"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
