"use client"
import React from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header className='fixed w-screen bg-white shadow-md z-50'>
            <nav className='container mx-auto px-6 py-3'>
                <div className='flex justify-between items-center'>
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-2xl font-bold text-[#667eea]'
                    >
                        Pujan<span className='text-gray-700'>.</span>
                    </m.div>

                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <Link
                                    href={item.href}
                                    className='text-gray-700 hover:text-[#667eea] transition-colors'
                                >{item.name}</Link>
                            </m.div>

                        ))}
                    </div>
                    <m.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='md:hidden text-gray-700 focus:outline-none'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label='Toggle Menu'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {isOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 18h16' /> )}
                        </svg>
                    </m.button>
                </div>

                {isOpen && (
                    <m.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className='md:hidden mt-4 pb-4'
                    >
                        <div className='flex flex-col space-y-4'>
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className='text-gray-700 hover:text-[#667eea] transition-colors px-2 py-1'
                                    onClick={()=>setIsOpen(false)}
                                >{item.name}</Link>
                            ))}
                        </div>
                    </m.div>
                )}
            </nav>
        </header>
    )
}

export default Header