'use client'
import { motion as m } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram className="size-8" />, url: "https://www.instagram.com/newarpujan?igsh=ZXJya2d4Z2xwNGRr" },
    { icon: <FaGithub className="size-8" />, url: "https://github.com/Pujan512" },
    { icon: <FaLinkedin className="size-8" />, url: "https://www.linkedin.com/in/pujan-shrestha-0b0144266" },
  ]
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <m.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            className='md-4 md:md-0'
          >
            <h3 className='text-xl font-bold'>Pujan Shrestha</h3>
            <p className='text-gray-400'>Full-Stack Developer</p>
          </m.div>

          <m.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity:1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
            className='flex space-x-4'
          >
            {socialLinks.map((link, index) => (
              <m.a
                key={index}
                whileHover={{y: -5, color: '#6667eea'}}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
              >{link.icon}</m.a>
            ))}
          </m.div>
        </div>

        <m.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
          className='border-t border-gray-700 mt-6 pt-6 text-center text-gray-400'
        >
          <p>&copy;{new Date().getFullYear()} Pujan Shrestha. All rights reserved.</p>
        </m.div>
      </div>
    </footer>
  )
}

export default Footer