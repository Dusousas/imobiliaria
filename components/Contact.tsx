"use client";

import React from 'react';
import Map from './subc/Map';
import Form from './subc/Form';
import { LuMapPinHouse } from 'react-icons/lu';
import { MdOutlineEmail, MdPhonelinkRing } from 'react-icons/md';

export default function Contact() {
    return (
        <>
            <Map />
            <section id='contact' className='py-20'>
                <div className='maxW flex flex-col gap-20 lg:flex-row'>
                    <Form />
                    <article>
                        <h1 className='text-2xl font-bold text-center lg:text-left'>Entre em contato</h1>
                        <p className='text-center lg:text-left'>Tem dúvidas ou quer saber mais sobre um imóvel? Fale com nossa equipe e receba um atendimento rápido, claro e personalizado.</p>

                        <div className='flex items-center gap-4 mt-8'>
                            <LuMapPinHouse className='text-4xl' />
                            <div>
                                <h1 className='font-semibold'>Endereço</h1>
                                <p>Av. das Nações Unidas, 12901 - Brooklin, São Paulo.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-8'>
                            <MdOutlineEmail className='text-4xl' />
                            <div>
                                <h1 className='font-semibold'>E-mail</h1>
                                <p>conato@seudominio.com</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 mt-8'>
                            <MdPhonelinkRing className='text-4xl' />
                            <div>
                                <h1 className='font-semibold'>Telefone</h1>
                                <p>11 91234-1234</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}