"use client";
import React from 'react';
import { IoResize } from 'react-icons/io5';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';

export default function Infos() {
    return (
        <>
            <section className='py-20'>
                <div className='lg:max-w-6xl mx-auto '>


                    <div className='flex flex-col gap-8 lg:flex-row'>
                        <article className='bg-white py-10 px-8 w-full rounded-xl'>
                            <p className='rounded-lg'>Alugar</p>
                            <h1 className='font-semibold text-xl'>Casa</h1>
                            <p className='text-xl mt-4'>Av. Nações Unidas, 123</p>
                            <h4 className='text-2xl font-semibold text-BTN mt-2'>R$5.800</h4>

                            <div className='flex gap-8 mt-8'>
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
                        </article>

                        <article className='bg-white py-10 px-8 rounded-xl'>
                            <h1 className='text-xl font-semibold mt-2'>Detalhes</h1>
                            <div className='flex gap-20 mt-4'>
                                <div>
                                    <h1>Vagas</h1>
                                    <h1>Quartos</h1>
                                    <h1>Banheiros</h1>
                                    <h1>Tamanho</h1>
                                </div>

                                <div>
                                    <h1>3</h1>
                                    <h1>4</h1>
                                    <h1>3</h1>
                                    <h1>220m2</h1>
                                </div>
                            </div>
                        </article>
                    </div>

                    <article className='bg-white py-10 px-8 rounded-xl mt-8'>
                        <h1 className='text-xl font-semibold mt-2'>Descrição</h1>
                        <p className='mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    </article>

                    <article className='bg-white py-10 px-8 rounded-xl mt-8'>
                        <h1 className='text-xl font-semibold mt-2'>Localização</h1>
                        <iframe className='w-full mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14623.308848471861!2d-46.708511021661806!3d-23.610529000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50cd1a4cd8ef%3A0x92e30a024ac8b621!2sShopping%20Na%C3%A7%C3%B5es%20Unidas!5e0!3m2!1spt-BR!2sbr!4v1746809732190!5m2!1spt-BR!2sbr" width="600" height="400"></iframe>
                    </article>

                </div>
            </section>
        </>
    );
}