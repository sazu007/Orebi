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
  
    <nav>
        <Container className="bg-slate-600 w-full">
            <Flex className="items-center">
            <div className="w-1/4 relative">
                <div className="flex items-center" ref={categoryRef}>
                <FaBars />
                    <p className="pl-3 font-dm text-slate-800">Shop by Category</p>
                </div>
                {cartshow && 
                <div className="bg-slate-400 absolute top-10 left-0 w-full">
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
                <div className="bg-slate-400 w-[200px] absolute top-12 right-0">
                    <ul>
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">My Account</a> </li> 
                    <li className="text-[rgba(255,255,255,0.72)] py-2 pl-3 hover:text-white font-dm hover:pl-6 duration-300 ease-in"> <a href="#">Login</a> </li> 
                    </ul>
                </div>}
              
                <div className="" ref={cartplusRef}>
                <FaCartPlus />
                </div> 
                    {cartplus &&
                    <div className="w-[350px] py-8 bg-slate-200 border-2 border-gray-300 absolute top-9 right-0">
                        <div className="flex gap-1">
                            <div className="w-2/6">
                                <img src={Watch} alt="watch" class="w-[60px] h-[60px] ml-3 hover:w-[80px] hover:h-[80px]" />
                            </div>
                            <div className="w-3/6">
                                <h6 className="font-dm text-[12px] text-slate-900 font-semibold">Black Smart Watch</h6>
                                <p className="font-dm text-[14px] text-slate-900 py-2">$44.00</p>
                            </div>
                            <div className="w-1/6">
                                <p><RxCross2 /></p>
                            </div>
                        </div>
                        <div className="w-full text-center"> 
                                <span className="font-dm text-black ">Sub Total: $44.00</span>
                                </div>
                                <div className="flex justify-around mt-8">
                                    <div className="">  
                                    <button className="border-solid bg-slate-400 rounded items-center font-dm text-sm px-3 py-1 hover:text-white"><a href="">View Chart</a></button>
                                    </div>
                                    <div className=""> 
                                    <button className="border-solid border-2 bg-slate-400 rounded items-center font-dm text-sm px-3 py-1 hover:text-white"><a href="">Checkout</a></button>
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