"use client"

import React from 'react';
import { IoResize } from 'react-icons/io5';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';

export default function ListHouse() {
    return (
        <>
            <section className='py-20 lg:w-[70%]'>
                <div className='maxW'>

                 
                        <article className='flex flex-col w-full lg:flex-row'>
                            <div className='lg:w-[80%]'>
                                <img className='w-full lg:rounded-l-2xl' src="c-1.jpg" alt="" />
                            </div>

                            <div className='border lg:border-y lg:border-r lg:rounded-r-2xl w-full px-8 py-6'>
                                <div>
                                    <h1 className='font-bold'>Alameda Dos Guaiós, 250. Planalto Paulista, São Paulo/SP</h1>
                                    <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                                    <div className='flex gap-6 mt-4'>
                                        <div className='flex items-center gap-2'>
                                            <IoResize className='text-xl text-BTN' />
                                            <h5 className='text-md font-bold'>220m2</h5>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <MdBedroomParent className='text-xl text-BTN' />
                                            <h5 className='text-md font-bold'>4</h5>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <MdBathroom className='text-xl text-BTN' />
                                            <h5 className='text-md font-bold'>3</h5>
                                        </div>
                                    </div>
                                    <h4 className='text-2xl mt-4 font-semibold text-BTN'>R$5.800</h4>

                                    <div className='mt-4'>
                                        <a className='bg-BTN px-6 py-2 rounded-lg text-white' href="/slug">Contatar</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                  

                </div>
            </section>
        </>
    );
}