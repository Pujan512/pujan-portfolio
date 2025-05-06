'use client'
import { motion as m } from 'framer-motion'
import React from 'react'

const Projects = () => {
  const projectsData = [
    {
      title: "Omnisale (E-commerce platform)",
      src: '/projects/OmniLogoSmall.png',
      description: "Developed a full-stack e-commerce platform with product listings and cart functionality.",
      tech: "ReactJS, TailwindCSS, .NET, MSSQL, JWT",
      gitLink: "https://github.com/Pujan512/Omnisale",
      link: "https://omnisale.vercel.app",
    },
    {
      title: "ChatNest (Realtime Chatapp)",
      src: '/projects/chat.png',
      description: "Built a real-time messaging app.",
      tech: "ReactJS, TailwindCSS, Socket.io, ExpressJS, MongoDB",
      gitLink: "https://github.com/Pujan512/Chat-app",
      link: "https://chat-app-meer.onrender.com",
    },
    {
      title: "Todo App",
      src: '/projects/todo.png',
      description: "Created a CRUD task manager with React.js for frontend and local storage for data persistence.",
      tech: "ReactJS, Local Storage",
      gitLink: "https://github.com/Pujan512/Todo-react",
      link: "https://todo-react-pujan.vercel.app/",
    },
  ]

  return (
    <section id='projects' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-10'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>My Projects</h2>
          <div className='w-20 h-1 bg-[#667eea] mx-auto' />
        </m.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='h-48 bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center'>
                <img src={project.src} alt={project.title} className='object-contain size-40' />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{project.title}</h3>
                <p className='text-gray-600 mb-4'>
                  <span className='font-medium'>Tech Stack:</span> {project.tech}
                </p>
                <div className='flex gap-5'>
                  <m.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.gitLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-[#667eea] text-white px-4 py-2 rounded-lg text-sm font-medium'
                  > Github
                  </m.a>
                  <m.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-[#667eea] text-white px-4 py-2 rounded-lg text-sm font-medium'
                  > View Project
                  </m.a>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects