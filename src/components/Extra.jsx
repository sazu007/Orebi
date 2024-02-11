import React from 'react'
import Container from './Container'
import Logoimg from "../assets/Logo.png"

const Extra = () => {
  return (
  
    <div className="">
        <Container>
            <div className=" py-10 flex justify-end items-center gap-8">
                <div className="w-[10%] h-[250px] items-center">
                <ul className="text-center"> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">MENU</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Home</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">About</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Contact</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Journal</li>
              
                </ul>
                </div>
                <div className="w-[10%] h-[250px]">
                <ul className="text-center"> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">SHOP</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-1</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-2</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-3</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-4</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-5</li>
              
                </ul>
                </div>
                <div className="w-[15%] h-[250px]">
                <ul className="text-center"> 
                <li className="text-base font-dm font-semibold text[#262626] py-4 lg:w-[300px] text-center">HELP</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Privacy Policy</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Terms & Conditions</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Special E-shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Shipping</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Secure Payments</li>
              
                </ul>
                </div>
                <div className="w-[25%] h-[250px]">
                <ul className='pl-5 px-4 lg:px-0 lg:pl-12 text-center'> 
                <li className="text-base font-dm font-bold text-[#262626] lg:py-2">(052) 611-5711</li>
                <li className="text-base font-dm font-bold text-[#262626]">company@domain.com</li>
                <li className="text-base font-dm  text-[#262626] lg:py-2">575 Crescent Ave. Quakertown, PA 18951</li>
              
                </ul>
                </div>
                <div className="w-[38%] h-[250px] bg-indigo-500]">
                <img className="ml-[250px]" src={Logoimg} alt="" />

                </div>
           
            </div>
        </Container>
    </div>
  )
}

export default Extra