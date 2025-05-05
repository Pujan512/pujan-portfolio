'use client'
import { motion as m } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
    <section id='#about' className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>About me</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto'></div>
        </m.div>

        <div className='flex flex-col md:flex-row items-center'>
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 mb-8 md:mb-0 md:pr-8'
          >
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Who am I?</h3>
            <p>I&apos;m Pujan Shrestha, a motivated computer science student with hands-on experience in full-stack development.
              I&apos;m eager to contribute my technical skills and learn as intern while achieving company goals.
            </p>
            <p className='text-gray-600 mb-4'>
              I&apos;m adept at problem-solving, teamwork and adapting to new technologies quickly.
            </p>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <span className='size-2 bg-[#667eea] rounded-full mr-2'></span>
                <span>+977 9828779949</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg'
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Proficient in MS Office (Word, Excel, PowerPoint)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Strong written and verbal communication skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Quick learner with a passion for technology</span>
              </li>
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default About