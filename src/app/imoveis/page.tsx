"use client";
import React from 'react';
import Filters from './components/Filters';
import ListHouse from './components/ListHouse';

export default function page() {
    return (
        <>
            <section className=''>
                <div className='maxW flex gap-10'>
                    <Filters />
                    <ListHouse />
                </div>
            </section>
        </>
    );
}