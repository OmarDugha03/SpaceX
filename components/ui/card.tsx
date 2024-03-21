import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface cardProps {
  id: number
  title: string
  desc: string
  url: string
  img: string
}

const Card: FC<cardProps> = ({ id, desc, img, title, url }) => {
  return (
    <Link key={id} href={url} target='_blank'>
      <Image src={img} alt={img} />
      <h3 className='bg-slate-700 text-white'>{title}</h3>
      <p>{desc}</p>
    </Link>
  )
}

export default Card
