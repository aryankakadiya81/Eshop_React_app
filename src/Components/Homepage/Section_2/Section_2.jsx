import React from 'react';
import "./Section_2.css";
import Section from "./Section_2.json"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


const Section_2 = (Props) => {
  return (
    <>
      <div className='container-2xl mx-auto mt-20'>
        <div className='w-10/12 mx-auto'>
          <div className='flex justify-center'>
            <div className='container'>

              <div className='flex justify-between'>
                <h1 className='font-bold border-0 border-custom-pink border-l-4 text-4xl pl-5'>Popular Product</h1>
                <div>
                  <Link to='/' className='ml-6'>Top Rated</Link>
                  <Link to='/Best' className='ml-6'>Best Selling</Link>
                  <Link to='/Latest' className='ml-6'>Latest Product</Link>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-8 mt-10'>

                {Section.map((ele) => {
                  return (
                    <div className='main-product-card h-[400px] w-[300px] mt-5' key={ele.Name}>
                      <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                        <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5 sale-div'>{ele.Sal}</div>
                        <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{ele.Pr}</div>

                        <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                          <div className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                          <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                          <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                            <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                        </div>
                        <div className='h-full w-full overflow-hidden'>
                          <img src={ele.image} alt='photo' className=' image-scale  bg-center h-full w-full z-20'></img>
                        </div>

                        <button onClick={Props.CartFun}> <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500 '><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                      </div>

                      <div className='h-auto w-full '>
                        <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{ele.Name}</h1>
                        <h1 className=' text-gray-700 font-semibold mt-1'><del>{ele.Delprice}</del> {ele.Price}</h1>
                      </div>

                    </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  )
}

export default Section_2
// import aset_11 from "../../../assets/asset11.jpeg"

// import aset_17 from "../../../assets/asset 17.jpeg"
// import aset_23 from "../../../assets/asset 23.jpeg"
// import aset_29 from "../../../assets/asset 29.jpeg"
// import aset_35 from "../../../assets/asset 35.jpeg"
// import aset_41 from "../../../assets/asset 41.jpeg"
// import aset_47 from "../../../assets/asset 47.jpeg"
// import aset_53 from "../../../assets/asset 53.jpeg"
// import aset_59 from "../../../assets/asset 59.jpeg"
// import aset_65 from "../../../assets/asset 65.jpeg"
// import aset_75 from "../../../assets/asset 75.jpeg"
// import aset_77 from "../../../assets/asset 77.jpeg"