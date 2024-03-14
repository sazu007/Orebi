import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Myaccount = () => {
  return (
    <>
    <div className="">
        <Container>
            <div className="">
            <div className="w-full">
    <h2 className='font-dm font-bold text-[22px] text-[#262626] py-4'>Contact</h2>
    <h6 className='font-dm font-normal text-[14px] text-[#262626] flex items-center pb-14'> <Link to="/">Home</Link> <IoIosArrowForward className='ml-2 mr-2'/> <Link to="/contacts">My Account</Link> </h6>
    </div>
    
            </div>
        </Container>
    </div>
      
    </>
  )
}

export default Myaccount
