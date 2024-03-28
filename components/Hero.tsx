'use client'
import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export default function Hero() {
  const words = [
    {
      text: 'Build'
    },
    {
      text: 'awesome'
    },
    {
      text: 'apps'
    },
    {
      text: 'with'
    },
    {
      text: 'Omar Dugha !',
      className: 'text-blue-500 dark:text-blue-500'
    }
  ]
  return (
    <>
      <div className='flex h-[60vh] flex-col items-center justify-center lg:h-[40rem]  '>
        <p className='text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  '>
          Turn your ideas to real life code
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>

      <HeroParallax products={products} />
    </>
  )
}
export const products = [
  {
    title: 'Bookmark',
    link: 'https://gomoonbeam.com',
    thumbnail: '/bookmark.png'
  },
  {
    title: 'Blog Manager',
    link: 'https://cursor.so',
    thumbnail: '/blogmanager.png'
  },
  {
    title: 'Easybank',
    link: 'https://userogue.com',
    thumbnail: '/easybank.png'
  },

  {
    title: 'Mini-dashboard',
    link: 'https://editorially.org',
    thumbnail: '/minidash.png'
  },
  {
    title: 'Countries  API',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Weather App',
    link: 'https://editrix.ai',
    thumbnail: '/weather.png'
  },
  {
    title: 'Personal Website',
    link: 'https://editrix.ai',
    thumbnail: '/omarwebsite.png'
  },
  {
    title: 'Daraak arabic',
    link: 'https://editrix.ai',
    thumbnail: '/arab.png'
  },
  {
    title: 'Login Form',
    link: 'https://editrix.ai',
    thumbnail: '/loginform.png'
  },

  {
    title: 'Daraak ',
    link: 'https://editrix.ai',
    thumbnail: '/denglish.png'
  }
]
