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
      <div id='about-me'>
        <HeroParallax products={products} />
      </div>
    </>
  )
}
export const products = [
  {
    title: 'Bookmark',
    link: 'https://bookmark-manager.pages.dev/',
    thumbnail: '/bookmark.png'
  },
  {
    title: 'Blog Manager',
    link: 'https://blog-manager.pages.dev/',
    thumbnail: '/blogmanager.png'
  },
  {
    title: 'Easybank',
    link: 'https://easybank-landing-page-five-phi.vercel.app/',
    thumbnail: '/easybank.png'
  },

  {
    title: 'Mini-dashboard',
    link: 'https://mini-dashboard-two.vercel.app/',
    thumbnail: '/minidash.png'
  },
  {
    title: 'Countries  API',
    link: 'https://country-rest-red.vercel.app/',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Weather App',
    link: 'https://weather-app-eight-iota-24.vercel.app/',
    thumbnail: '/weather.png'
  },
  {
    title: 'Personal Website',
    link: 'https://omar-dugha.vercel.app/',
    thumbnail: '/omarwebsite.png'
  },
  {
    title: 'Daraak arabic',
    link: 'https://daraak-main-6h5s1rxes-omars-projects-1578f2e9.vercel.app/',
    thumbnail: '/arab.png'
  },
  {
    title: 'Login Form',
    link: 'https://daraak.vercel.app/',
    thumbnail: '/loginform.png'
  },

  {
    title: 'Daraak ',
    link: 'https://daraak.vercel.app/',
    thumbnail: '/denglish.png'
  }
]
