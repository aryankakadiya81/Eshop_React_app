import React from 'react'
import './Section_1.css';
import aset_3 from "../../../assets/asset 3.png"
import aset_94 from "../../../assets/asset 94.svg"

const Section_1 = () => {
    return (
        <>
            <div className="bg-[rgb(240,242,238)] h-[633px] select-none z-10">
                <div className="containerrr ">
                    <br />
                    <div className="flex mt-[160px] ">
                        <div className="">
                            <p className="relative after:absolute bg-red-500 h-[40px] w-[2px] mt-[2px]" />
                        </div>
                        <div className="">
                            <p className="ms-3 text-[18px] text-[#525258]">Best Ear</p>
                            <p className="ms-3 text-[18px] mt-[-5px] text-[#525258]">
                                Headphones
                            </p>
                            <div className="block mt-[-5px]">
                                <p
                                    className="text-[80px]"
                                    style={{
                                        fontFamily: "roboto,sans-serif",
                                        fontWeight: 600,
                                        letterSpacing: "-.01em"
                                    }}
                                >
                                    Music To
                                </p>
                                <p
                                    className="text-[80px] mt-[-35px]"
                                    style={{
                                        fontFamily: "Roboto,sans-serif",
                                        fontWeight: 600,
                                        letterSpacing: "-.01em"
                                    }}
                                >
                                    Fill Your Heart
                                </p>
                                <button
                                    className="text-[15px] mt-8 text-[#525258] px-6 font-medium border-[1.5px] flex py-2 border-solid border-black hover:bg-black hover:text-white"
                                    style={{ fontFamily: "sans-serif", padding: "7px , 33px" }}
                                >
                                    Shop Now
                                    <img src={aset_94} alt='Not Show' className="ml-2 mt-[2.5px] " />
                                </button>
                            </div>
                        </div>
                        <div className="loader top-[420px]"></div>
                        <img
                            alt='Not Show'
                            src={aset_3}
                            className="relative right-[-120px] h-[450px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section_1
