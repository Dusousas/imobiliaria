"use client"

import React from 'react';
import Navbar from './subc/Navbar';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className='py-6 shadow-md'>
                <div className='maxW flex justify-between items-center'>
                    <article>
                        <Link className='uppercase text-BTN text-2xl font-bold' href="/">Sua imobiliária</Link>
                    </article>

                    <Navbar />
                </div>
            </header>
        </>
    );
}