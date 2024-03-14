import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoIosArrowForward } from "react-icons/io";
import {Link } from 'react-router-dom';
import Map from "../assets/map.png";



const Contact = () => {
  return (
    <>
    <div className="py-10"> 
    <Container>
        <div className="w-full">
    <h2 className='font-dm font-bold text-[22px] text-[#262626] py-4'>Contact</h2>
    <h6 className='font-dm font-normal text-[14px] text-[#262626] flex items-center pb-14'> <Link to="/">Home</Link> <IoIosArrowForward className='ml-2 mr-2'/> <Link to="/contacts">Contact</Link> </h6>
    </div>
    <div className="header">
        <h2 className='font-dm text-[28px] font-bold text-[#262626]'>Fill up a Form</h2>
    </div>
    <div className="input py-5 border-2 border-[#d4cbcb] py-1 px-10 w-[50%] mt-3 ">
            <h3 className='font-dm text-base font-bold text-[#262626]'>Name</h3>
                < input type="text" placeholder='Your name here'/>
            </div>
            <div className="input py-5 border-2 border-[#d4cbcb] py-1 px-10 w-[50%] mt-3 mb-3 ">
            <h3 className='font-dm text-base font-bold text-[#262626]'>Email</h3>
                <input type="email" placeholder='Your name here'/>
            </div>
            <div className="input border-2  border-[#d4cbcb] py-1 px-10 w-[50%] ">
                <h3 className='font-dm text-base font-bold text-[#262626] border-1 py-3 border-gray-300'>Massage</h3>
                <input type="text" placeholder='Your name here'/>
            </div>

           <button className="border-2 border-[#d4cbcb] py-2 px-14 mt-10 mb-10 font-dm text-lg font-normal hover:text-white hover:bg-black duration-300">Post</button>
            <div className='py-10 items-center'>
                <img className='h-[350px] w-[95%]' src={Map} alt="" />
            </div>
    </Container>
    </div>
      
    </>
  )
}

export default Contact
