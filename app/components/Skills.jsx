'use client'
import { motion as m } from 'framer-motion'
import React from 'react'

const Skills = () => {
  const skillsData = [
    { name: 'ReactJS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'ASP.NET', level: 75 },
    { name: 'ExpressJS', level: 70 },
    { name: 'REST APIs', level: 80 },
    { name: 'MySQL/MSSQL', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git/Github', level: 85 },
  ]
  return (
    <section id='skills' className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <m.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Technical Skills</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto' />
        </m.div>

        {skillsData.map((skill, index) => (
          <m.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: index * 0.1}}
            className='mb-4'
          >
            <div className='flex justify-between mb-1'>
              <span className='text-gray-700 font-medium'>{skill.name}</span>
              <span className='text-[#667eea] font-medium'>{skill.level}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <m.div
                initial={{width: 0}}
                whileInView={{width: `${skill.level}%`}}
                viewport={{once: true}}
                transition={{duration: 1, delay: index * 0.1}}
                className='h-2.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]'
              ></m.div>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  )
}

export default Skills