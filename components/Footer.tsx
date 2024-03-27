import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <section className=' z-50 h-12  w-full  bg-slate-950 px-4 shadow-lg shadow-[#2A0E61]/50 '>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga
        similique rem.
      </p>
    </section>
  )
}

export default Footer
