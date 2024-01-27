import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className='py-6'> 
<Container>
    <Flex className="justify-between">
    <div className="">
        <img src={Logo} alt="logo" />
    </div>
    <div className="">
       <ul className="flex gap-x-8">
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
    </Flex>
</Container>
</header>
  )
}

export default Header