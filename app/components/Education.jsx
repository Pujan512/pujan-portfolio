'use client'
import { motion as m } from 'framer-motion'
import React from 'react'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree (CSIT)",
      institution: "Amrit Science Campus, Lainchaur, Kathmandu",
      period: "2022 - ongoing",
    },
    {
      degree: "Intermediate Level",
      institution: "Southwestern State College, Basundhara, Kathmandu",
      period: "2020 - 2021",
    },
    {
      degree: "Secondary Education Examination",
      institution: "Purkot Land Star Secondary School, Bhanu-09, Tanahun",
      period: "2019",
    },

  ]
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <m.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Education</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto'></div>
        </m.div>

        <div className='max-w-3xl mx-auto'>
          {educationData.map((item, index) => (
            <m.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: index*0.2}}
              className={`mb-8 p-6 rounded-lg shadow-md bg-white ${index %2 === 0 ? 'border-l-4 border-[#667eea]' : 'border-l-4 border-[#764ba2]'}`}
            >
              <h3 className='text-xl font-semibold text-gray-800 mb-1'>{item.degree}</h3>
              <p className='text-gray-600 mb-2'>{item.institution}</p>
              <p className='text-[#667eea] font-medium'>{item.period}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education