import React from 'react';
import { Link } from 'react-router-dom';
import Errors from '../../../assets/Error.svg';
// import aset_89 from '../../../assets/aset 89.jpeg'
import Section_5 from '../../Homepage/Section_5/Section_5';

const Error_main = () => {
    return (
        <>
            <div className=' bg-[rgb(241,241,246)]'>
                <h1 className='font-semibold text-white text-[400px] text-center tracking-wide'>404</h1>
                <div className='containerrr '>
                    <img src={Errors} className='mt-[-520px] ms-[285px]' alt='' />
                    <p className='text-center text-[50px] leading-[60px] tracking-[-2px] font-bold font-[sans-serif] mt-[40px]'>Oops! Page not found</p>
                    <p className='text-center text-[16px] leading-[25.6px] font-[sans-serif] text-[#525258] mt-[10px]'>Whoops, this is embarassing. Looks like the page you<br />were looking for was not found.</p>
                    <div className='flex justify-center mt-[25px]'>
                        <Link to='/' className='mb-[120px]'><button className=' bg-[#f50963] px-7 hover:bg-black hover:duration-500 py-2 text-[16px] text-[white] leading-[26px]   text-center tracking-[-0.32px]' style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Back To Home<i class="fa-solid fa-arrow-right ms-[7px]"></i> </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Section_5></Section_5>
        </>
    )
}


export default Error_main
