'use client'
import Hero, { products } from '@/components/Hero'
import CallTOAction from '@/components/callToAction'
import Card from '@/components/ui/card'
import { LampContainer, LampDemo } from '@/components/ui/lamp'
import { TracingBeam } from '@/components/ui/tracing-beam'
export default function Home() {
  return (
    <div className='relative  m-0 flex h-full  w-full items-center justify-center bg-black  bg-grid-small-white/[0.4]'>
      <div className='pointer-events-none absolute  inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <TracingBeam className=' lg:mt-20'>
        <Hero />
        <div className=' w-full'>
          <LampDemo text1={'My Projects'} />
        </div>
        <section className='mt-0 grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2   '>
          {products.map(item => (
            <Card
              title={'this is the title'}
              key={item.title}
              desc={'this is the descrpt'}
              url={item.thumbnail}
              repo={item.link}
            />
          ))}
        </section>

        <CallTOAction />
      </TracingBeam>
    </div>
  )
}
