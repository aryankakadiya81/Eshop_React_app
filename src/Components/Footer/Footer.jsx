import React from 'react';
import aset_0 from "../../../assets/asset0.svg";
import aset_87 from "../../../assets/asset 87.png";


const Footer = () => {
  return (
    <>
      <div>

        <div className="containerrr">
          <div className="flex justify-between mt-[100px]">
            <div>
              <img src={aset_0} alt=""/>
              <p className="max-w-[200px] mt-3 text-[#525258]">The home and elements needed to create <br /> beautiful products.</p>
              <a href='#'><i className="fa-brands fa-facebook mt-3 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              <a href='#'><i className="fa-brands fa-twitter ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              <a href='#'><i className="fa-brands fa-linkedin-in ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
              <a href='#'><i className="fa-brands fa-youtube ms-2 text-[20px] hover:text-red-400 duration-500 text-[#525258]" /></a>
            </div>
            <div>
              <p className="text-[20px]"><b>Company</b></p>
              <a href='#'><p className="mt-5 text-[#525258] hover:text-red-400 duration-500">About us</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Careers</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Store Locations</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Our Blog</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Reviews</p></a>
            </div>
            <div>
              <p className="text-[20px]"><b>Shop</b></p>
              <a href='#'><p className="mt-5 text-[#525258] hover:text-red-400 duration-500">Game &amp; Video</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Phone &amp;Tablets</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Computers &amp; Laptop</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Sport Watches</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Discounts</p></a>
            </div>
            <div>
              <p className="text-[20px]"><b>Support</b></p>
              <a href='#'><p className="mt-5 text-[#525258] hover:text-red-400 duration-500">FAQs</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Reviews</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Contact Us</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Shipping</p></a>
              <a href='#'><p className="mt-2 text-[#525258] hover:text-red-400 duration-500">Returns</p></a>
            </div>
            <div>
              <p className="text-[20px]"><b>Talk To Us</b></p>
              <p className="mt-5 text-[#525258]">Find a location nearest <br /> you. See <a href='#'><span className="underline text-red-400">Our Stores</span></a></p>
              <a href='#'><p className="text-[20px] mt-3 hover:text-red-400 duration-500"><b>+624 423 26 72</b></p></a>
              <a href='#'><p className="hover:text-red-400 duration-500 text-[#525258]">support@harry.com</p></a>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-400 w-[1116px] mt-[100px] ">
          </div>
          <div className="flex justify-between mt-5 mb-10">
            <div>
              <p className="text-[#525258]">Copyright © 2023 by <a href="#" className="text-red-400">Hamart</a> All rights reserved.</p>
            </div>
            <div>
              <img src={aset_87} alt="not show" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
