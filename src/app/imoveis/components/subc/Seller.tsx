import React from 'react';

export default function Seller() {
    return (
        <>
            <section className='border rounded-b-lg px-4 py-8'>
                    <h1 className="text-sm font-medium">Tipo de Vendedor</h1>

                    <div className='mt-2 flex  flex-wrap gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Direto com proprietário</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Somente Imobiliárias</button>
                    </div>
            </section>
        </>
    );
}