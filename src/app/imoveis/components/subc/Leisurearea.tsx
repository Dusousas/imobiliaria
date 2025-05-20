import React from 'react';

export default function Leisurearea() {
    return (
        <>
            <section className='border-x px-4 py-8'>
                    <h1 className="text-sm font-medium">Área de Lazer</h1>

                    <div className='mt-2 flex  flex-wrap gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Brinquedoteca</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Churrasqueira</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Espaço gourmet</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Piscina</button>
                    </div>
            </section>
        </>
    );
}