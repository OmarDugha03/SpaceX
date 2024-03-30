'use client'
import Contact from '@/components/Contact'
import Hero, { products } from '@/components/Hero'
import Skills from '@/components/Skills'
import Card from '@/components/ui/card'
import { LampDemo } from '@/components/ui/lamp'
import { TracingBeam } from '@/components/ui/tracing-beam'
export default function Home() {
  return (
    <div className='relative  m-0 flex h-full  w-full items-center justify-center bg-black  bg-grid-small-white/[0.4]'>
      <div className='pointer-events-none absolute  inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <TracingBeam className=' lg:mt-20'>
        <Hero />
        <div className='w-full  lg:mt-24'>
          <LampDemo text1={'My Projects'} />
        </div>
        <section
          id='projects'
          className=' mx-2 mt-0 grid w-[95%] grid-cols-1 gap-5 lg:mx-0  lg:w-full lg:grid-cols-2   '
        >
          {products.map(item => (
            <Card
              title={item.title}
              key={item.title}
              url={item.thumbnail}
              repo={item.link}
            />
          ))}
        </section>
        <section>
          <Skills />
        </section>
        <Contact />
      </TracingBeam>
    </div>
  )
}
