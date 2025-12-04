import React from 'react';
import logo from "../assets/ChatGPT Image Oct 22, 2025, 07_24_17 PM.png";

const Newsletter = () => {
    return (
        <div className='bg-black/60 backdrop-blur-md grid grid-cols-1 mt-20 border-2 border-transparent 
                  shadow-2xl shadow-black/70  hover:border-cyan-400 hover:shadow-cyan-500/50 hover:z-10 rounded-2xl w-11/12 mx-auto md:grid-cols-2 items-center'>
            <img src={logo} alt="" />
            <div className='space-y-5'>
               
                <div className='space-y-2 '>
                <h1 className='text-4xl md:text-start text-center dotmatrix text-red-600'>Subscribe to GameVerse BD Newsletter</h1>
                <p className='text-red-600 md:text-start text-center '>Get latest Game Updates and Leaks first</p>
                </div>

                <div className='flex md:justify-start justify-center '>
                <input type="email"  placeholder="mail@gmail.com" 
                className=" input w-7/12 placeholder-gray-500 text-red-500 bg-black border-pink-600" />
                </div>

                <button className='btn btn-outline w-5/10 '>Subscribe Now</button>

            </div>
        </div>
    );
};

export default Newsletter;