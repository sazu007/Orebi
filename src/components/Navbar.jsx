import React, { useEffect, useRef,categoryRef,current, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars, FaCartPlus,FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import Watch from "../assets/black watch.webp"
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
 let [cartshow, setCartshow] = useState(false)
 let [cartacc, setCartacc] = useState(false)
 let [cartplus, setCartplus] = useState(false)
 let categoryRef = useRef()
 let cartaccRef = useRef()
 let cartplusRef = useRef()
 
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
if(cartplusRef.current.contains(e.target) == true){
    setCartplus(!cartplus)
}else{
    setCartplus(false) 
}
})

 },[cartshow,cartacc,cartplus])
  return (
  
    <nav className="bg-[#F5F5F3] py-4">
        <Container className="bg- w-full">
            <Flex className="items-center">
            <div className="w-1/4 relative">
                <div className="flex items-center cursor-pointer" ref={categoryRef}>
                <FaBars />
                    <p className="pl-3 font-dm text-slate-800 cursor-pointer">Shop by Category</p>
                </div>
                {cartshow && 
                <div className="bg-gray-600 absolute top-10 left-0 w-full z-50">
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
            <IoSearchSharp className="text-xl cursor-pointer"/>
            </div>
            </div>
            </div>
            <div className="w-1/4">
                <div className="flex justify-end gap-x-3 relative"> 
                <div className="flex cursor-pointer" ref={cartaccRef}>
                <FaUser />
                <TiArrowSortedDown />
                </div>
                {cartacc &&
                <div className="bg-gray-600 w-[200px] absolute top-12 right-0 z-50">
                    <ul>
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">My Account</a> </li> 
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">Login</a> </li> 
                    </ul>
                </div>}
              
                <div className="cursor-pointer" ref={cartplusRef}>
                <FaCartPlus />
                </div> 
                    {cartplus &&
                    <div className="absolute top-9 right-0 z-50"> 
                    <div className="w-[350px] py-8 bg-[#F5F5F3] border-2 border-gray-300">
                        <div className="flex gap-1">
                            <div className="w-2/6">
                                <img src={Watch} alt="watch" class="w-[60px] h-[60px] ml-3 hover:w-[120px] hover:h-[120px]" />
                            </div>
                            <div className="w-3/6">
                                <h6 className="font-dm text-[16px] text-slate-900 font-semibold pl-3">Black Smart Watch</h6>
                                <p className="font-dm text-[16px] text-slate-900 py-2 pl-3">$44.00</p>
                            </div>
                            <div className="w-1/6">
                                <p><RxCross2 /></p>
                            </div>
                        </div>
                                <h2 className="font-dm text-black pt-6 pl-4">Sub Total: $44.00</h2>
                                    <div className="bg-white py-2 items-center pl-4">  
                                <a className="w-[148px] h-[50px] border-2 border-[#262626] inline-block leading-10 text-center font-dm font-normal text-base hover:bg-[#262626] hover:text-white pl-0 mr-4"href="#">View Cart</a>   
                                <a className="w-[148px] h-[50px] border-2 border-[#262626] inline-block leading-10 text-center font-dm font-normal text-base hover:bg-[#262626] hover:text-white"href="#">View Cart</a>   
                                  </div>
                    </div>
                    </div>
                    }
                </div>

            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar