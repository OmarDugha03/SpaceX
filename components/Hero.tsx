'use client'
import React from 'react'
import { HeroParallax } from '@/components/ui/hero-parallax'

export default function Hero() {
  return <HeroParallax products={products} />
}
export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/bookmark.png'
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/blogmanager.png'
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/easybank.png'
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/minidash.png'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/restapi.png'
  }
]
