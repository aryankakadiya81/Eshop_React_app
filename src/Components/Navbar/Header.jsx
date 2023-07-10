import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import aset_0 from '../../assets/asset0.svg';
import aset_90 from "../../assets/asset90.svg"
import aset_91 from "../../assets/asset91.svg"
import aset_92 from "../../assets/asset92.svg"
import aset_93 from "../../assets/asset 93.svg"

const Header = () => {
  return (
    <>
      <div className="bg-[#f0f2ee] h-[80px]  border-[1px] border-gray-300  border-t-0 border-r-0 border-l-0 select-none">
        <div className="containerr">
          <header>
            <nav className="border-solid">
              <br />
              <ul className="header-menu flex justify-between relative  items-center">
                <a href="#">
                  <img src={aset_0} className='mt-[-3.5px]' />
                </a>
                <div className="flex absolute left-[260px] gap-8 ">
                  <div>
                    <Link to="/" style={{ fontFamily: "sans-serif" }} className="text-[525258] text-[15px] hover:text-red-600 ">Home</Link>
                  </div>
                  <div>
                    <Link to="/About" className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }}>About Us</Link>
                  </div>

                  <div>
                    <Link to="/Shop" className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }}>Shop</Link>
                  </div>

                  <div className="dropdown relative">
                    <button className="inline-flex items-center">
                      <a href="#" className="hover:text-pink-700">Pages</a>
                      <svg className="fill-current h-4 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <div className="dropdown-menu absolute hidden pt-5 pb-5 px-5 w-48 bg-white shadow-xl text-sm leading-7 cursor-pointer">

                      <Link to="/Pages/Faqs" className="hover:text-pink-700">FAQs</Link><br/>
                      <a href="#" className="hover:text-pink-700">Privacy & Policy</a> <br />
                      <a href="#" className="hover:text-pink-700">Terms & conditions</a> <br />
                      <a href="#" className="hover:text-pink-700">Login</a> <br />
                      <a href="#" className="hover:text-pink-700">Register</a> <br />
                      <a href="#" className="hover:text-pink-700">Forget Password</a> <br />
                      <a href="#" className="hover:text-pink-700">My Cart</a> <br />
                      <a href="#" className="hover:text-pink-700">My Wishlist</a> <br />
                      <a href="#" className="hover:text-pink-700">Checkout</a> <br />
                      <a href="#" className="hover:text-pink-700">Error 404</a>
                    </div>
                  </div>

                  <div>
                    <a className="text-[525258] text-[15px] hover:text-red-600 "
                      style={{ fontFamily: "sans-serif" }} href="#">Contact us</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <a href="#">
                    <img src={aset_90} alt="" />
                  </a>
                  <a href="#">
                    <img src={aset_91} alt="" />
                  </a>
                  <div>
                    <div
                      className="absolute right-12 -top-0.5 z-10 -translate-y-0 translate-x-2.5 rounded-full bg-pink-600 p-1 text-xs text-white">0</div>
                    <a href="#">
                      <img src={aset_92} alt="" />
                    </a>
                  </div>
                  <div>
                    <div
                      className="absolute right-1 -top-0.5 z-10 -translate-y-0 translate-x-2.5 rounded-full bg-pink-600 p-1 text-xs text-white">0</div>
                    <a href="#">
                      <img src={aset_93} alt="" />
                    </a>
                  </div>
                </div>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>

  );
};

export default Header;
