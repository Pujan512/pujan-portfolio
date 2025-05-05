'use client'
import { motion as m } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Contact = () => {
  const mailRefs = React.useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const anchor = document.createElement('a');
    anchor.href = `mailto:shresthapujan0010@gmail.com?subject=${mailRefs.current[1].value}&body=${mailRefs.current[2].value}`
    anchor.click();
  }
  return (
    <section id='contact' className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Get In Touch</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto' />
        </m.div>
        <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2'
          >
            <h3 className='text-2xl font-semibold text-gray-800 mb-6'>Contact Information</h3>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-[#667eea] bg-opacity-10 p-3 rounded-full mr-4'>
                  <EnvelopeIcon className='size-6 text-white' />
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-800'>Email</h4>
                  <p className='text-gray-600'>shresthapujan0010@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-[#667eea] bg-opacity-10 p-3 rounded-full mr-4'>
                  <PhoneIcon className='size-6 text-white' />
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-800'>Phone</h4>
                  <p className='text-gray-600'>+977 9828779949</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-[#667eea] bg-opacity-10 p-3 rounded-full mr-4'>
                  <MapPinIcon className='size-6 text-white ' />
                </div>
                <div>
                  <h4 className='text-lg font-medium text-gray-800'>Location</h4>
                  <p className='text-gray-600'>Chandragiri - 1, Kathmandu, Nepal</p>
                </div>
              </div>

            </div>
          </m.div>

          <m.div
            initial={{opacity: 0, x:50}}
            whileInView={{opacity:1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className='md:w-1/2'
          >
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label htmlFor='name' className='block text-gray-700 mb-2'>Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#667eea] focus:border-[#667eea]lsldhfl'
                    placeholder='Your Name'
                    ref={el => mailRefs.current[0] = el}
                    />
                </div>
                
                <div>
                  <label htmlFor='subject' className='block text-gray-700 mb-2'>Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#667eea] focus:border-[#667eea]'
                    placeholder='Subject'
                    ref={el => mailRefs.current[1] = el}
                    />
                </div>

                <div className='md:col-span-2'>
                  <label htmlFor='message' className='block text-gray-700 mb-2'>Message</label>
                  <textarea
                    required
                    rows="5"
                    id="message"
                    className='w-full col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#667eea] focus:border-[#667eea]'
                    placeholder='Your message'
                    ref={el => mailRefs.current[2] = el}
                    />
                </div>

                <m.button
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  type='submit'
                  className='w-full bg-gradient-to-l from-[#667eea] to-[#764ba2] text-white py-3 rounded-lg font-semibold shadow-md'
                >Send Message</m.button>
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Contact