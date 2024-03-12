import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/Logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import {Link} from "react-router-dom";


const Header = () => {
    let [show, setShow] = useState(false)

    let handleShow = () => {
        setShow(!show)
    }
  return (
    <header className='py-6'> 
<Container>
    <Flex className="justify-between">
    <div className="px-6 animate-bounce">
        <img className="w-24 h-6 lg:w-32 lg:h-10" src={Logo} alt="logo" />
    </div>
    <div className="">
       <ul className={`lg:flex gap-x-8 absolute left-0 top-0 lg:static ${show == true ? "bg-[#F5F5F5] text-center w-full duration-300 ease-in  !top-[50px] z-50" : "!top-[50px] duration-300 ease-in left-[-200px]"}`}>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <Link to="/">Home</Link>
            </li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'> 
           <Link to="/product">Shop</Link>
        </li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <Link to="/about">About</Link></li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <Link to="/contact">Contact</Link></li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <a href="#">Journal</a></li>
       </ul>
        </div>
        <div className="lg:hidden pr-10" onClick={handleShow}>
        {show ? <RxCross2 /> : <FaBars />}
        </div>
            </Flex>
</Container>
</header>
  )
}

export default Header