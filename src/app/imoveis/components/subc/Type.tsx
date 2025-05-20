import React from 'react';
import { PiBuildingApartment } from 'react-icons/pi';

export default function Type() {
    return (
        <>
            <section className='border px-4 py-8'>
                <div className=''>
                    <h1 className="text-sm font-medium">Tipos de imóveis</h1>

                    <article className='flex mt-4 gap-4 justify-center'>
                        <div className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col w-1/3'>
                            <PiBuildingApartment className='text-3xl text-BlueTEXT' />
                            <p className='text-sm'>Apartamentos</p>
                        </div>

                        <div className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col  w-1/3'>
                            <PiBuildingApartment className='text-3xl text-BlueTEXT' />
                            <p className='text-sm'>Casas</p>
                        </div>

                        <div className='bg-gray-100 p-4 rounded-xl cursor-pointer justify-center items-center flex flex-col  w-1/3'>
                            <PiBuildingApartment className='text-3xl text-BlueTEXT' />
                            <p className='text-sm'>Kitnets</p>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}