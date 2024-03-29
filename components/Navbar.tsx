import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  return (
    <>
      <section className='fixed top-0 z-50 hidden h-[65px] w-full bg-slate-900  px-5   shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md lg:block'>
        <nav className='container m-auto flex  h-full w-full flex-row items-center justify-between '>
          <Link
            href='#about-me'
            className='flex h-auto w-auto flex-row items-center gap-x-4'
          >
            <Image
              src='/MyLogo.svg'
              alt='logo'
              width={70}
              height={70}
              className=' h-12 w-20 cursor-pointer'
            />

            <span className='ml-[10px] hidden font-bold text-gray-300 md:block'>
              Frontend Developer
            </span>
          </Link>

          <div className='flex h-full w-[500px] flex-row items-center justify-between md:mr-20'>
            <div className='mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200'>
              <a href='#about-me' className='cursor-pointer'>
                About me
              </a>
              <a href='#skills' className='cursor-pointer'>
                Skills
              </a>
              <a href='#projects' className='cursor-pointer'>
                Projects
              </a>
            </div>
          </div>
        </nav>
      </section>
      {/* Mobile  */}
      <section className='container bg-slate-900 p-4 lg:hidden'>
        <nav className='m-auto flex h-full  w-full flex-row items-center justify-between px-[10px]'>
          <Link
            href='#about-me'
            className='flex h-auto w-auto flex-row items-center gap-x-4'
          >
            <Image
              src='/MyLogo.svg'
              alt='logo'
              width={70}
              height={70}
              className='hover:animate-slowspin h-12 w-20 cursor-pointer'
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src='/icon-hamburger.svg'
                width={44}
                height={44}
                alt='icon-hamburger'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mr-6 mt-2 '>
              <DropdownMenuItem>
                <a href='#about-me' className='cursor-pointer'>
                  About me
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href='#skills' className='cursor-pointer'>
                  Skills
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href='#projects' className='cursor-pointer'>
                  Projects
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </section>
    </>
  )
}

export default Navbar
