import React from 'react';
import { Link } from 'react-router-dom';
import Errors from '../../../assets/Error.svg'
import Section_5 from '../../Homepage/Section_5/Section_5';

const Error_main = () => {
    return (
        <>
        <div className='flex justify-center pt-[80px]'>
        <img src={`${Errors}`} height={"400px"} width={"500px"}></img>
        </div>
            <div className='text-5xl font-bold text-center mt-10'>
                Oops! Page not found
            </div>
            <div className='text-center text-2xl mx-72 my-6'>Whoops, this is embarassing. Looks like the page you were looking for was not found.</div>
            <div className='flex justify-center'>
                <Link to="/"><button className=' bg-pink-700 text-white px-5 py-3 font-bold hover:bg-black mb-28 mt-7'>Back to Home&rarr;</button></Link>
            </div>
            <Section_5></Section_5>
        </>
    )
}

export default Error_main
