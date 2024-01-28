import React, { useEffect, useRef,categoryRef,current, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars, FaCartPlus,FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
 let [cartshow, setCartshow] = useState(false)
 let [cartacc, setCartacc] = useState(false)
 let categoryRef = useRef()
 let cartaccRef = useRef()
 
 useEffect(()=> {
document.addEventListener("click", (e)=>{
    if(categoryRef.current.contains(e.target) == true){
        setCartshow(!cartshow)
}else{
    setCartshow(false)
}
if(cartaccRef.current.contains(e.target) == true){
    setCartacc(!cartacc)
}else{
    setCartacc(false) 
}
})

 },[cartshow,cartacc])
  return (
  
    <nav>
        <Container>
            <Flex className="items-center">
            <div className="w-1/4 relative">
                <div className="flex items-center" ref={categoryRef}>
                <FaBars />
                    <p className="pl-3">Shop by Category</p>
                </div>
                {cartshow && 
                <div className="bg-[#8d8989] absolute top-10 left-0 w-full">
                    <ul>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Accessories</li>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Furniture</li>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Electronics</li>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Clothes</li>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Bags</li>
                        <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in">Home Appliances</li>
                    </ul>
                </div>}
            </div>
            <div className="w-1/2">
            <div className="relative"> 
            <input type="search" placeholder='search......' className="w-full border-2 border-[#313131] outline-0 py-3 px-2"/>
            <div className="absolute top-5 right-5" > 
            <IoSearchSharp className="text-xl"/>
            </div>
            </div>
            </div>
            <div className="w-1/4">
                <div className="flex justify-end gap-x-3 relative"> 
                <div className="flex" ref={cartaccRef}>
                <FaUser />
                <TiArrowSortedDown />
                </div>
                {cartacc &&
                <div className="bg-[#8c8989] w-[200px] absolute top-12 right-0">
                    <ul>
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">My Account</a> </li> 
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">Login</a> </li> 
                    </ul>
                </div>}
                <div className="">
                <FaCartPlus />
                </div>
                </div>

            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar