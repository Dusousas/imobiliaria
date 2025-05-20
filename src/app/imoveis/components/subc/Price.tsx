import React from 'react';

export default function Price() {
    return (
        <>
            <section className='border-x px-4 py-8 '>
        
                    <article className='flex gap-2 justify-between'>

                        <div className=''>
                            <p className='font-bold text-sm'>Preço à partir de</p>
                            <input className='bg-gray-100 border border-gray-200 p-2 rounded-lg mt-2 w-[98%]' placeholder='R$ 0' type="text" />
                        </div>

                        <div className=''>
                            <p className='font-bold text-sm'>Até</p>
                            <input className='bg-gray-100 border border-gray-200 p-2 rounded-lg mt-2 w-[98%]' placeholder='R$ 0' type="text" />
                        </div>
                    </article>
             
            </section>
        </>
    );
}