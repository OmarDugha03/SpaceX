import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CardBody, CardContainer, CardItem } from './threeDcard'

interface cardProps {
  title: string
  desc?: string
  url: string
  repo: string
}

const Card: FC<cardProps> = ({ repo, title, url }) => {
  return (
    <CardContainer className='inter-var md:m-0 lg:w-[90%]'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-violet-600/40 sm:w-[30rem]  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
          {title}
        </CardItem>

        <CardItem translateZ='100' className='mt-4 w-full'>
          <Link href={repo} target='_blank'>
            <Image
              src={url}
              placeholder='blur'
              blurDataURL={url}
              height='1000'
              width='1000'
              className=' w-full rounded-xl object-cover group-hover/card:shadow-violet-500'
              alt='thumbnail'
            />
          </Link>
        </CardItem>
        <div className='mt-2 flex items-center justify-between'>
          <CardItem
            translateZ={20}
            as={Link}
            href={repo}
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
