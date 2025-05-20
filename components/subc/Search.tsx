"use client";
import React, { useState, ChangeEvent, JSX } from 'react';
import { FiMapPin } from "react-icons/fi";

type PropertyOption = 'Buy' | 'Rent' | 'Sale';

export default function Search(): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<PropertyOption>('Sale');

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSelectedOption(event.target.value as PropertyOption);
    };

    return (
        <div className="relative w-full mt-8 flex justify-center lg:mt-12">
            <div className="bg-white rounded-xl py-4 shadow-md w-full lg:w-4/5 flex items-center flex-col md:flex-row overflow-hidden lg:py-0">

                <article className="flex items-center space-x-4 px-6 md:border-r md:border-gray-200">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" className="form-radio h-4 w-4 cursor-pointer" name="propertyOption" value="Buy" checked={selectedOption === 'Buy'} onChange={handleOptionChange}/>
                        <span className="text-BlueTITLE font-Jost">Comprar</span>
                    </label>
                    
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" className="form-radio h-4 w-4 text-green-500 cursor-pointer" name="propertyOption" value="Sale" checked={selectedOption === 'Sale'} onChange={handleOptionChange}/>
                        <span className="text-BlueTITLE font-Jost">Alugar</span>
                    </label>
                </article>

                <article className="relative flex-1 p-3">
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FiMapPin />
                        </div>
                        <input className="w-full py-3 rounded-lg pl-10 pr-32 outline-0 text-BlueTITLE" placeholder="Procurar imóveis" type="text"/>

                        <button className="bg-BTN text-white cursor-pointer px-6 py-3 rounded-lg absolute right-2 top-1/2 transform -translate-y-1/2" type="button">Pesquisar</button>
                    </div>
                </article>

            </div>
        </div>
    );
}