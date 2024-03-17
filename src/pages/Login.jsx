import React from 'react'
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const Login = () => {
  return (
<>
<div className=""> 
<Container>
<div className="">
            <div className="w-full">
    <h2 className='font-dm font-bold text-[42px] text-[#262626] py-4'>Log in</h2>
    <h6 className='font-dm font-normal text-[14px] text-[#262626] flex items-center pb-14'> <Link to="/">Home</Link> <IoIosArrowForward className='ml-2 mr-2'/> <Link to="/contacts">Login</Link> </h6>
    </div>
    </div>
    <div className="w-[650px] py-10">
        <p className="font-sans font-normal text-[18px] text-[#767676]items-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    </div>

    <div className="">
        <h2  className='font-dm font-bold text-[38px] text-[#262626] py-10 pt-10'>Returning Customer</h2>
        <div className="flex w-full">
        </div>

        <div className="flex w-full">
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>E-mail address</h3>
                <input className="py-3 w-[400px]" type="email" placeholder='company@domain.com'/>
            </div>
            <div className="w-1/2">
                <h3 className='font-dm font-bold text-[20px] text-[#262626] pt-5'>Passward</h3>
                <input className='py-3 w-[400px]' type="passward" placeholder='*********'/>
                
            </div>
        </div>
    </div>
    <div className="py-10">
    <button className='font-dm font-bold text-[18px] text-[#262626] border-2 border-gray-400 px-14 py-2 hover:text-white hover:bg-black duration-300'><Link >Log in</Link></button>
    </div>
    <div className="">
        <h2  className='font-dm font-bold text-[38px] text-[#262626] py-10 pt-10'>New Customer</h2>

        <h5 className='w-[640px] font-dm font-semi-bold text-[16px] text-[#262626]]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </h5>
    </div>
    <div className="py-10 pb-12">
        <button className='font-dm font-bold text-[18px] text-[#262626] border-2 border-gray-400 px-14 py-2 hover:text-white hover:bg-black duration-300 '><Link >Continue</Link></button>
    </div>


</Container>

</div>
</>  
  )
}

export default Login