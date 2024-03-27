import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CardBody, CardContainer, CardItem } from './threeDcard'

interface cardProps {
  title: string
  desc: string
  url: string
  img: string
}

const Card: FC<cardProps> = ({ desc, img, title, url }) => {
  return (
    <CardContainer className='inter-var m-2 md:m-0'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'
        >
          {desc}
        </CardItem>
        <CardItem translateZ='100' className='mt-4 w-full'>
          <Image
            src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            height='1000'
            width='1000'
            className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='mt-20 flex items-center justify-between'>
          <CardItem
            translateZ={20}
            as={Link}
            href={img}
            target='__blank'
            className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
          >
            {null}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default Card
