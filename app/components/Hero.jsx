"use client"
import React from 'react'
import { motion as m } from 'framer-motion'

const Hero = () => {
  return (
    <section id='home' className='pt-24 pb-16 md:pt-32 md:pb-40 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row-reverse items-center'>
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 flex justify-center'
          >
            <div className='w-64 h-64 md:size-90 bg-white rounded-full overflow-hidden shadow-2xl'>
              {/* place your image */}
              <div className='w-full h-full bg-gray-200 flex items-center justify-center'>

                <img src="/profile.png" alt='profile' />
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 mt-10 md:mb-0 text-center md:text-left'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Hi, I&apos;m <span className='text-yellow-300'>Pujan Shrestha</span>
            </h1>
            <h2 className='text-xl md:text-2xl mb-6'>Full-Stack Developer</h2>
            <p className='text-lg mb-8'>Motivated computer science student with hands-on experience in full-stack development.</p>
            <div className='flex gap-8 justify-center md:justify-start'>
              <m.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#contact'
                className='inline-block bg-white text-[#667eea] px-6 py-3 rounded-lg font-semibold shadow-lg'
              > Contact me
              </m.a>

              <m.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='/Pujan_CV.pdf'
                download
                className='inline-block bg-white text-[#667eea] px-6 py-3 rounded-lg font-semibold shadow-lg'
              > Download CV
              </m.a>
            </div>
          </m.div>


        </div>
      </div>
    </section >
  )
}

export default Hero