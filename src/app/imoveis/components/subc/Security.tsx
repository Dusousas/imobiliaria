import React from 'react';

export default function Security() {
    return (
        <>
            <section className='border-x px-4 py-8'>
                    <h1 className="text-sm font-medium">Segurança</h1>

                    <div className='mt-2 flex  flex-wrap gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Guarita</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Portaria</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Interfone</button>
                    </div>
            </section>
        </>
    );
}