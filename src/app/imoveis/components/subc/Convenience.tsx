import React from 'react';

export default function Convenience() {
    return (
        <>
            <section className='border px-4 py-8'>
                    <h1 className="text-sm font-medium">Conveniências</h1>

                    <div className='mt-2 flex  flex-wrap gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Ar-condicionado</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Elavador</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Quintal</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col text-sm'>Jardim</button>
                    </div>
            </section>
        </>
    );
}