"use client"
import React from 'react';
import Image from 'next/image';
import { IoResize } from 'react-icons/io5';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';
import Link from 'next/link';

export default function ExploreCardsSell() {
    return (
        <>
            <article className='mt-10 lg:mt-20 flex flex-col lg:flex-row gap-6 justify-center items-center'>

                {/* Card 1 */}
                <div className='shadow-lg bg-white rounded-lg lg:max-w-[33.3%]'>
                    <Image className='filter-none' src="/c-1.jpg"  alt="Casa" width={400} height={300}/>
                    <div className='flex justify-between items-center mt-4 px-4'>
                        <div>
                            <p>Alugar</p>
                            <h1 className='font-semibold text-xl'>Casa</h1>
                        </div>
                        <h4 className='text-2xl font-semibold text-BTN'>R$670.000</h4>
                    </div>
                    <div className='flex gap-6 mt-4 justify-center'>
                        <div className='flex items-center gap-2'>
                            <MdBedroomParent className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>4</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdBathroom className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>3</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoResize className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>220m2</h5>
                        </div>
                    </div>
                    <div className='border-t mx-auto mt-4 border-BlueBG'></div>
                    <div className='flex justify-between items-center py-4 px-4'>
                        <p className='text-xl'>Av. Nações Unidas, 123</p>
                        <Link href='/slug' className='bg-BTN text-white px-3 py-2 rounded-2xl'>Ver mais</Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='shadow-lg bg-white rounded-lg lg:max-w-[33.3%]'>
                    <Image className='filter-none' src="/c-1.jpg" alt="Casa" width={400} height={300}/>
                    <div className='flex justify-between items-center mt-4 px-4'>
                        <div>
                            <p>Alugar</p>
                            <h1 className='font-semibold text-xl'>Casa</h1>
                        </div>
                        <h4 className='text-2xl font-semibold text-BTN'>R$900.000</h4>
                    </div>
                    <div className='flex gap-6 mt-4 justify-center'>
                        <div className='flex items-center gap-2'>
                            <MdBedroomParent className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>5</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdBathroom className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>4</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoResize className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>320m2</h5>
                        </div>
                    </div>
                    <div className='border-t mx-auto mt-4 border-BlueBG'></div>
                    <div className='flex justify-between items-center py-4 px-4'>
                        <p className='text-xl'>Av. Nações Unidas, 123</p>
                        <Link href='/slug' className='bg-BTN text-white px-3 py-2 rounded-2xl'>Ver mais</Link>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='shadow-lg bg-white rounded-lg lg:max-w-[33.3%]'>
                    <Image className='filter-none' src="/c-1.jpg" alt="Apartamento" width={400} height={300}/>
                    <div className='flex justify-between items-center mt-4 px-4'>
                        <div>
                            <p>Alugar</p>
                            <h1 className='font-semibold text-xl'>Apartamento</h1>
                        </div>
                        <h4 className='text-2xl font-semibold text-BTN'>R$450.000</h4>
                    </div>
                    <div className='flex gap-6 mt-4 justify-center'>
                        <div className='flex items-center gap-2'>
                            <MdBedroomParent className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>2</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdBathroom className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>2</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoResize className='text-3xl text-BTN' />
                            <h5 className='text-lg font-bold'>120m2</h5>
                        </div>
                    </div>
                    <div className='border-t mx-auto mt-4 border-BlueBG'></div>
                    <div className='flex justify-between items-center py-4 px-4'>
                        <p className='text-xl'>Av. Nações Unidas, 123</p>
                        <Link href='/slug' className='bg-BTN text-white px-3 py-2 rounded-2xl'>Ver mais</Link>
                    </div>
                </div>

            </article>
        </>
    );
}
