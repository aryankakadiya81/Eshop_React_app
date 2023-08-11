import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import asset4 from '../../../../assets/asset 7.jpeg';
import asset5 from '../../../../assets/asset 10.jpeg';
import asset7 from '../../../../assets/asset 8.jpeg';
import asset8 from '../../../../assets/asset 5.jpeg';


const Section_1p5 = () => {
    return (
        <>
            <Swiper className="mySwiper my-10 mx-5 border-b-2 pb-14 flex justify-center">
                <SwiperSlide className='flex justify-between mx-2'>
                    <div className=' border-0 '>
                        <img src={asset5} className='w-[300px] h-56' />
                        <p className='text-center mt-5 font-bold'>Wireless & Watches</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset4} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Camera Bluetooth & Headset</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset7} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Wireless & Watches</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset8} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Wireless & Watches</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-between '>
                    <div className=' border-0 '>
                        <img src={asset5} className='w-[300px] h-56' />
                        <p className='text-center mt-5 font-bold'>Wireless & Watches</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset4} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Camera Bluetooth & Headset</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset7} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Wireless & Watches</p>
                    </div>
                    <div className='  border-0 '>
                        <img src={asset8} className='w-[300px] h-56' />
                        <p className='text-center mt-5  font-bold'>Wireless & Watches</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Section_1p5

