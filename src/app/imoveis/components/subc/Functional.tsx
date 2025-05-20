import React from 'react';

export default function Functional() {
    return (
        <>
            <section className='border px-4 py-8'>
                    <h1 className="text-sm font-medium">Funcional</h1>

                    <div className='mt-2 flex  flex-wrap gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Lavabo</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Lavanderia</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Edícula</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Closet</button>
                    </div>
            </section>
        </>
    );
}