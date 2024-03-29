import React from 'react'
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'

import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className=' w-full bg-slate-900 p-[15px]  text-gray-200 shadow-lg '>
      <div className='m-auto flex  w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-x-12'>
        <span className='flex h-auto min-w-[200px] flex-col items-center justify-start'>
          <div className='text-[16px] font-bold'>Social Media</div>
          <p className='my-[15px] flex cursor-pointer  flex-row items-center'>
            <RxLinkedinLogo />
            <Link
              href='https://www.linkedin.com/in/omar-dugha-5495222aa'
              target='_blank'
              className='ml-[6px] text-[15px]'
            >
              LinkedIn
            </Link>
          </p>
          <p className='my-[15px] flex cursor-pointer  flex-row items-center'>
            <RxDiscordLogo />
            <Link
              href='https://www.linkedin.com/in/omar-dugha-5495222aa'
              target='_blank'
              className='ml-[6px] text-[15px]'
            >
              Discord
            </Link>
          </p>
          <p className='my-[15px] flex cursor-pointer flex-row items-center'>
            <RxGithubLogo />
            <span className='ml-[6px] text-[15px]'>Github</span>
          </p>
        </span>
        <span className='flex h-auto min-w-[200px] flex-col items-center justify-start'>
          <div className='text-[16px] font-bold'>About</div>
          <p className='my-[15px] flex cursor-pointer flex-row items-center'>
            <span className='ml-[6px] text-[15px]'>My Services</span>
          </p>
          <p className='my-[15px] flex cursor-pointer flex-row items-center'>
            <Link
              href='https://www.linkedin.com/in/omar-dugha-5495222aa'
              target='_blank'
              className='ml-[6px] text-[15px]'
            >
              Learning about me
            </Link>
          </p>
        </span>
      </div>
    </footer>
  )
}

export default Footer
