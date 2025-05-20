"use client";

import Link from 'next/link';
import React from 'react';

export default function Form() {
    return (
        <>
            <form className='lg:w-1/2' action="">

                <article className='flex flex-col w-full gap-4 lg:flex-row'>
                    <div className='flex flex-col gap-y-1 w-full'>
                        <label className='text-BlueTEXT font-Jost font-bold' htmlFor="">Nome <span className='text-red-600'>*</span></label>
                        <input className='border border-gray-200 bg-gray-100 px-4 py-3 outline-0' placeholder='Nome' type="text" />
                    </div>

                    <div className='flex flex-col gap-y-1 w-full'>
                        <label className='text-BlueTEXT font-Jost font-bold' htmlFor="">Telefone <span className='text-red-600'>*</span></label>
                        <input className='border border-gray-200 bg-gray-100 px-4 py-3 outline-0' placeholder='Telefone' type="text" />
                    </div>
                </article>
                <article className='mt-4'>
                    <label className='text-BlueTEXT font-Jost font-bold' htmlFor="">Telefone <span className='text-red-600'>*</span></label>
                    <textarea className='border border-gray-200 bg-gray-100 px-4 w-full resize-none py-3 outline-0' placeholder='Sua mensagem' rows={5} name="" id=""></textarea>
                </article>
                <div className='mt-4 flex justify-center lg:justify-start'>
                    <Link className='bg-[#E7FAF4] border border-[#A5ECD8] font-semibold text-BTN px-3 py-4 mt-4' href="">Fale com um especialista</Link>
                </div>


            </form>
        </>
    );
}