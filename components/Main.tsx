import React from 'react';
import Search from './subc/Search';

export default function Main() {
    return (
        <>
            <section className='bg-BlueBG h-[80vh] bgHome'>
                <div className='maxW flex flex-col justify-center items-center h-full'>
                    <p className='text-center text-lg'>Casas e apartamentos à venda ou para alugar com as melhores oportunidades da região.</p>
                    <h1 className='text-center text-5xl mt-4 lg:text-7xl'>Encontre o seu <span className='font-bold'>Lugar Perfeito.</span></h1>
                    <Search />
                </div>
            </section>
        </>
    );
}