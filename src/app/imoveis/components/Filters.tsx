import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { IoFilter } from 'react-icons/io5';
import SearchFilter from './subc/SearchFilter';
import Type from './subc/Type';
import Price from './subc/Price';
import Amount from './subc/Amount';
import Leisurearea from './subc/Leisurearea';
import Convenience from './subc/Convenience';
import Security from './subc/Security';
import Seller from './subc/Seller';

export default function Filters() {
    return (
        <>
            <section className='hidden w-[30%] py-20 h-[100vh] overflow-y-auto lg:block'>
                <div className='maxW'>
                    <div className='flex justify-between px-4'>
                        <p className='font-bold flex items-center gap-2'><IoFilter />Filtros</p>
                        <h4 className='flex gap-2 items-center font-semibold text-red-500 cursor-pointer'><HiOutlineTrash />Limpar tudo</h4>
                    </div>

                    <div className='flex justify-between mt-4 bg-red-500/10 border border-red-500 px-4 py-2 rounded-md'>
                        <p className='font-bold flex items-center gap-2'>Filtros Atuais</p>
                        <button className='flex gap-2 items-center font-Jost cursor-pointer font-semibold text-red-500'>Nenhum Filtro</button>
                    </div>

                    <SearchFilter />
                    <Type />
                    <Price />
                    <Amount />
                    <Leisurearea />
                    <Convenience />
                    <Security />
                    <Seller />

                </div>
            </section>
        </>
    );
}