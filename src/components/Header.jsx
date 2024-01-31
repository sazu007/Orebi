import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/Logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";


const Header = () => {
    let [show, setShow] = useState(false)

    let handleShow = () => {
        setShow(!show)
    }
  return (
    <header className='py-6'> 
<Container>
    <Flex className="justify-between">
    <div className="">
        <img className="w-24 h-6" src={Logo} alt="logo" />
    </div>
    <div className="">
       <ul className={`lg:flex gap-x-8 absolute left-0 top-0 lg:static ${show == true ? "bg-[#F5F5F5] text-center top-[60px] w-full duration-300 ease-in z-50" : "top-[-200px] w-full"}`}>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <a href="#">Home</a></li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'> 
            <a href="#">Shop</a>
        </li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <a href="#">About</a></li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <a href="#">Contact</a></li>
        <li className='font-dm font-normal text-base text-[#767676] hover:text-[#222]'>
            <a href="#">Journal</a></li>
       </ul>
        </div>
        <div className="lg:hidden" onClick={handleShow}>
        {show ? <RxCross2 /> : <FaBars />}
        </div>
            </Flex>
</Container>
</header>
  )
}

export default Header