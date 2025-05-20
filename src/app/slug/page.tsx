"use client";

import React from 'react';
import SlideHouse from './components/SlideHouse';
import Infos from './components/Infos';

export default function page() {
    return (
        <>
            <SlideHouse />
            <section className='bg-BlueBG'>
                <div className='maxW'>
                    <Infos />
                </div>
            </section>
        </>
    );
}