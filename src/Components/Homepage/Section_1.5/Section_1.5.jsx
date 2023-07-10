import React from 'react';
import asset4 from '../../../assets/asset 7.jpeg';
import asset5 from '../../../assets/asset 10.jpeg';
import asset7 from '../../../assets/asset 8.jpeg';
import asset8 from '../../../assets/asset 5.jpeg';


const Section_1p5 = () => {
    return (
        <>
            <div className='container-2xl mx-12'>
                <div className='mt-24 border-b-2 justify-center flex'>
                    <div className='flex justify-center container'>
                        <div className='w-1/2 border-0 border-custom-pink'>
                            <img src={asset8} className='w-80 h-48' />
                            <p className='text-center mt-5 mb-7 font-bold'>Exercise Bike & Shaver Clean</p>
                        </div>
                        <div className='w-1/2 ml-5 border-0 '>
                            <img src={asset5} className='w-80 h-48' />
                            <p className='text-center mt-5 mb-7 font-bold'>Wireless & Watches</p>
                        </div>
                        <div className='w-1/2 ml-5 border-0'>
                            <img src={asset4} className='w-80 h-48' />
                            <p className='text-center mt-5 mb-7 font-bold'>Camera Bluetooth & Headset</p>
                        </div>
                        <div className='w-1/2 ml-5 border-0'>
                            <img src={asset7} className='w-80 h-48' />
                            <p className='text-center mt-5 mb-7 font-bold'>Ipad Phone & Tablets</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Section_1p5
