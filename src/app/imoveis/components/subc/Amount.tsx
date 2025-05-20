import React from 'react';

export default function Amount() {
    return (
        <>
            <section className='border px-4 py-8'>
                <article>
                    <h1 className="text-sm font-medium">Quantidade de quartos</h1>
                    <div className='mt-2 flex gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+1</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+2</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+3</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+4</button>
                    </div>
                </article>

                <article className='mt-4'>
                    <h1 className="text-sm font-medium">Quantidade de banheiros</h1>
                    <div className='mt-2 flex gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+1</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+2</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+3</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+4</button>
                    </div>
                </article>

                <article className='mt-4'>
                    <h1 className="text-sm font-medium">Quantidade de garagem</h1>
                    <div className='mt-2 flex gap-2'>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+1</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+2</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+3</button>
                        <button className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col'>+4</button>
                    </div>
                </article>



            </section>
        </>
    );
}