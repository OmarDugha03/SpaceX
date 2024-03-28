'use client'
import React from 'react'
import { TextRevealCard } from '@/components/ui/text-reveal-card'

export default function CallTOAction() {
  return (
    <section className=''>
      <h3>You have an Idea !</h3>
      <TextRevealCard
        className='w-[80%] border-none bg-transparent hover:text-clip'
        text='You have the idea '
        revealText='I will make it real !'
      ></TextRevealCard>
    </section>
  )
}
