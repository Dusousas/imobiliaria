"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function SearchFilter() {
    const [activeTab, setActiveTab] = useState('comprar');

    return (
        <div className="border-x border-t rounded-t-lg shadow-sm overflow-hidden mt-4">
            
            <div className="flex border-b">
                <button onClick={() => setActiveTab('comprar')} className={`flex-1 py-3 text-center cursor-pointer font-medium ${activeTab === 'comprar' ? 'text-BlueTITLE border-b-2 border-BlueTEXT' : 'text-gray-500'}`}>Comprar</button>
                <button onClick={() => setActiveTab('alugar')} className={`flex-1 py-3 text-center cursor-pointer font-medium ${activeTab === 'alugar' ? 'text-BlueTITLE border-b-2 border-BlueTEXT' : 'text-gray-500'}`}>Alugar</button>
                <button onClick={() => setActiveTab('lancamentos')} className={`flex-1 py-3 text-center cursor-pointer font-medium ${activeTab === 'lancamentos' ? 'text-BlueTITLE border-b-2 border-BlueTEXT' : 'text-gray-500'}`}>Lançamentos</button>
            </div>

            <div className="p-4">
                <div className="mb-2 flex justify-between items-center">
                    <h1 className="text-sm font-medium">Localização</h1>
                    <div className="text-BlueTEXT text-sm font-medium flex items-center">
                        <p className="mr-1">Perto de mim</p>
                        <FaMapMarkerAlt size={16} />
                    </div>
                </div>
                
                <div className="relative">
                    <FaMapMarkerAlt size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input type="text" placeholder="Digite bairro, rua ou cidade" className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-500 bg-gray-50"/>
                </div>
            </div>

        </div>
    );
}