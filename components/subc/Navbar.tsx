"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className='hidden lg:block'>
                <ul className='flex gap-6 font-Jost text-lg font-semibold text-BTN'>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="#about">Sobre</Link></li>
                    <li><Link href="/imoveis">Imóveis</Link></li>
                    <li><Link href="#contact">Contato</Link></li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <div className='lg:hidden'>
                <button 
                    onClick={toggleMenu} 
                    className='text-BTN p-2'
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu Fullscreen */}
                <nav className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={toggleMenu} 
                            className='text-BTN p-2'
                            aria-label="Close menu"
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-center h-full">
                        <ul className='flex flex-col gap-8 font-Jost text-2xl font-semibold text-BTN text-center'>
                            <li><Link href="/" onClick={toggleMenu}>Início</Link></li>
                            <li><Link href="#about" onClick={toggleMenu}>Sobre</Link></li>
                            <li><Link href="/imoveis" onClick={toggleMenu}>Imóveis</Link></li>
                            <li><Link href="#contact" onClick={toggleMenu}>Contato</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
