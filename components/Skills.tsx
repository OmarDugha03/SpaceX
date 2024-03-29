import { Frontend_skill } from '@/constants'
import Image from 'next/image'
import { FC } from 'react'

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id='skills'>
      <p className='mb-3 ms-4 mt-7 text-center text-4xl font-bold md:my-12 lg:text-5xl '>
        My Skills :{' '}
      </p>

      <div className='mb-6 flex flex-col items-center space-y-7 lg:mt-12'>
        <div className='flex items-center space-x-1 md:space-x-4 lg:space-x-12'>
          {Frontend_skill.slice(0, 6).map(item => (
            <Image
              key={item.Image}
              src={item.Image}
              alt={item.skill_name}
              width={44}
              height={44}
            />
          ))}
        </div>
        <div className='flex items-center space-x-1 md:space-x-4 lg:space-x-12'>
          {Frontend_skill.slice(6, 10).map(item => (
            <Image
              key={item.Image}
              src={item.Image}
              alt={item.skill_name}
              width={44}
              height={44}
            />
          ))}
        </div>
        <div className='flex items-center space-x-1 md:space-x-4 lg:space-x-12'>
          {Frontend_skill.slice(10, 13).map(item => (
            <Image
              key={item.Image}
              src={item.Image}
              alt={item.skill_name}
              width={44}
              height={44}
            />
          ))}
        </div>
        <div className='flex items-center space-x-1 md:space-x-4 lg:space-x-12'>
          {Frontend_skill.slice(13, 15).map(item => (
            <Image
              key={item.Image}
              src={item.Image}
              alt={item.skill_name}
              width={44}
              className='rounded-lg bg-white'
              height={44}
            />
          ))}
        </div>
        <div className=' flex items-center space-x-1 md:space-x-4 lg:space-x-12'>
          {Frontend_skill.slice(15, 16).map(item => (
            <Image
              key={item.Image}
              src={item.Image}
              alt={item.skill_name}
              width={44}
              height={44}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
