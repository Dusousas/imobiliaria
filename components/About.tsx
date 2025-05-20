"use client";

import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='bg-white py-20'>
                <div className='maxW flex flex-col justify-center gap-x-30 gap-y-10 items-center lg:flex-row'>
                    <article className='lg:w-[70%]'>
                        <p>Sobre nós</p>
                        <h1 className='text-2xl font-bold'>Compromisso com o seu novo lar</h1>
                        <p>Somos uma imobiliária especializada em conectar pessoas aos imóveis ideais, seja para morar, investir ou empreender. Com uma equipe dedicada e conhecimento profundo do mercado, oferecemos um atendimento personalizado e transparente para garantir segurança em cada etapa da sua jornada. Nosso objetivo é transformar sonhos em realidade, com agilidade e confiança.</p>
                        <div className='flex flex-col text-center gap-x-6 gap-y-6 mt-8 lg:flex-row'>
                            <a className='bg-[#E7FAF4] border border-[#A5ECD8] font-semibold text-BTN px-3 py-2 rounded-2xl' href="">Fale com um especialista</a>
                            <a className='bg-BTN text-white px-3 py-2 rounded-2xl' href="/imoveis">Ver todos imóveis</a>
                        </div>
                    </article>

                    <article>
                        <img src="/app.png" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}