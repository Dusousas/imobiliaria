"use client"

import React, { useState } from 'react';
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
                    <li><a href="/">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="/imoveis">Imóveis</a></li>
                    <li><a href="#contact">Contato</a></li>
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

                {/* Mobile Menu Fullscreen - opens from right to left */}
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
                            <li><a href="/" onClick={toggleMenu}>Início</a></li>
                            <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                            <li><a href="/imoveis" onClick={toggleMenu}>Imóveis</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}