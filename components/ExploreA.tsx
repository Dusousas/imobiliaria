import React from 'react';
import ExploreCardsA from './subc/ExploreCardsA';

export default function Explore() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW'>
                    <h1 className='text-center text-2xl font-bold'>Imóveis de Aluguel Adicionados Recentemente</h1>
                    <p className='text-center text-lg mt-4'>Veja os imóveis mais recentes e aproveite as novas oportunidades do mercado imobiliário.</p>
                    <ExploreCardsA />
                </div>
            </section>
        </>
    );
}