'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoArrowLeft } from 'react-icons/go';

export default function SlideHouse() {
    const [isClient, setIsClient] = useState(false);
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const images = [
        '/c-1.jpg',
        '/c-2.jpg',
        '/c-1.jpg',
        '/c-2.jpg',
    ];

    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <>
            <section className='w-full px-4 relative'>
                {isClient && (
                    <>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1280: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}
                            className=''>
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='relative aspect-video w-full'>
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        <div className='absolute left-2 right-2 top-1/2 transform -translate-y-1/2 z-10 flex justify-between px-2 pointer-events-none'>
                            <div 
                                className='bg-white p-1 sm:p-2 cursor-pointer shadow-md hover:bg-gray-100 transition-colors pointer-events-auto'
                                onClick={handlePrev}
                            >
                                <GoArrowLeft className='text-BTN text-xl sm:text-2xl md:text-3xl' />
                            </div>
                            <div 
                                className='bg-white p-1 sm:p-2 cursor-pointer shadow-md hover:bg-gray-100 transition-colors pointer-events-auto'
                                onClick={handleNext}
                            >
                                <GoArrowLeft className='text-BTN text-xl sm:text-2xl md:text-3xl rotate-180' />
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}