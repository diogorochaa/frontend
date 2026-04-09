import { ParticlesContainer } from './components/ParticlesContainer'
import { ProjectsBtn } from './components/ProjectsBtn'

export default function Home() {
  return (
    <main className="bg-primary/60 h-full ">
      <div className=" flex p-2  w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 items-center justify-center">
        <div className="text-center flex flex-col justify-center md:pt-40 md:text-left h-full mx-auto md:pl-40">
          <h1 className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold">
            Transforming Ideas <br /> Into{' '}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm md:max-w-xl mx-auto md:mx-0 mb-10 md:mb-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            labore temporibus repudiandae dolorem libero nisi, quo culpa dicta
            quibusdam eveniet at consectetur facilis quod odit tenetur facere!
            Numquam, incidunt eum.
          </p>
          <div className="flex justify-center relative md:items-start md:justify-start ">
            <ProjectsBtn />
          </div>
        </div>
        <ParticlesContainer />
      </div>
    </main>
  )
}
