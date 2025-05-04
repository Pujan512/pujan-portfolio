"use client"
import React from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header className='fixed w-full bg-white shadow-md z-50'>
            <nav className='container mx-auto px-6 py-3'>
                <div className='flex justify-between items-center'>
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-2xl font-bold text-primary'
                    >
                        <span className='text-gray-700'>Pujan.</span>
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
                                    className='text-gray-700 hover:text-primary transition-colors'
                                >{item.name}</Link>
                            </m.div>

                        ))}
                    </div>
                    <m.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='md:hidden text-gray-700 focus:outline-none'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 18h16' />
                        </svg>
                    </m.button>
                </div>
            </nav>
        </header>
    )
}

export default Header