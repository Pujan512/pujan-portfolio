'use client'
import { motion as m } from 'framer-motion'
import React from 'react'

const Skills = () => {
  const skillsData = [
    { name: 'ReactJS', src: '/icons/react.png' },
    { name: 'JavaScript', src: '/icons/javascript.png' },
    { name: 'HTML5', src: '/icons/html5.png' },
    { name: 'CSS3', src: '/icons/css3.png' },
    { name: 'Tailwind CSS', src: '/icons/tailwindcss.png' },
    { name: 'ASP.NET', src: '/icons/dotnet.png' },
    { name: 'ExpressJS', src: '/icons/expressjs.png' },
    { name: 'MySQL', src: '/icons/mysql.png' },
    { name: 'MongoDB', src: '/icons/mongodb.png' },
    { name: 'Git', src: '/icons/git.png' },
  ]
  return (
    <section id='skills' className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Technical Skills</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto' />
        </m.div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:px-15 px-5 mx-auto'>
          {skillsData.map((skill, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='mb-4 bg-gray-200 p-5 size-35 md:size-40 rounded-lg'
            >
              <div className='flex flex-col items-center justify-center'>
                <img className="size-20" src={skill.src} alt={skill.name + "-logo"} />
                <span className='text-gray-700 font-medium'>{skill.name}</span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills