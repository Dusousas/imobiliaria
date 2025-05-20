import React from 'react';
import ExploreCardsSell from './subc/ExploreCardsSell';

export default function ExploreSell() {
    return (
        <>
            <section className='py-20 bg-BlueBG'>
                <div className='maxW'>
                    <h1 className='text-center text-2xl font-bold'>Imóveis de Venda Adicionados Recentemente</h1>
                    <p className='text-center text-lg mt-4'>Veja os imóveis mais recentes e aproveite as novas oportunidades do mercado imobiliário.</p>
                    <ExploreCardsSell />
                </div>
            </section>
        </>
    );
}