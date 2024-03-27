import Hero from '@/components/Hero'
import CallTOAction from '@/components/callToAction'
import { TracingBeam } from '@/components/ui/tracing-beam'
export default function Home() {
  return (
    <div className='relative  m-0 flex h-full  w-full items-center justify-center bg-black  bg-grid-small-white/[0.4]'>
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <TracingBeam className=' lg:mt-20'>
        <main className=''>
          <Hero />
        </main>
        <CallTOAction />
        <div className='h-[1200px]'></div>
      </TracingBeam>
    </div>
  )
}
