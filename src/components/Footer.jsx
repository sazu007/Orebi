import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
  <div className="py-2 lg:py-10 bg-[#F5F5F3]">
    <Container>
        
        <div className="lg:flex justify-evenly">
            <div className="flex lg:flex-none justify-evenly lg:justify-around lg:gap-10">  
            <div className="w-[25%] lg:w-[8%] list-none">
                <ul className=""> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">MENU</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Home</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">About</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Contact</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2">Journal</li>
              
                </ul>
            </div>
            <div className="w-[25%] lg:w-[8%] list-none lg:px-8">
            <ul className=""> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">SHOP</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-1</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-2</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-3</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-4</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2 ml-[-12px]">Category-5</li>
              
                </ul>
            </div>
            <div className="w-[25%] lg:w-[30%] list-none lg:px-8">
            <ul className=""> 
                <li className="text-base font-dm font-semibold text[#262626] py-4 lg:w-[300px]">HELP</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Privacy Policy</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Terms & Conditions</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Special E-shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Shipping</li>
                <li className="text-sm font-dm text-[#6D6D6D] lg:py-2  ml-[-30px] lg:ml-0">Secure Payments</li>
              
                </ul>
            </div>
            </div>

            <div className="flex justify-evenly lg:px-6 py-10 lg:py-0">  
            <div className="w-[72%] lg:w-[45%] list-none">
                <ul className='pl-5 px-4 lg:px-0 lg:pl-12'> 
                <li className="text-base font-dm font-bold text-[#262626] lg:py-2">(052) 611-5711</li>
                <li className="text-base font-dm font-bold text-[#262626]">company@domain.com</li>
                <li className="text-base font-dm  text-[#262626] lg:py-2">575 Crescent Ave. Quakertown, PA 18951</li>
              
                </ul>
            </div>
            <div className="w-[10%] lg:w-[10%] list-none">
                <img className="w-[110px] h-[29px] ml-[-30px] lg:ml-10 mt-10 animate-bounce" src={Logo} alt="" />
            </div>
            </div>
        </div>
        <div className=" lg:flex justify-between py-2 lg:py-10">
            <div className="w-[95%] lg:w-[30%] flex gap-6 justify-center lg:static lg:pl-10">
            <p className="text-base lg:text-xl cursor-pointer"><a href="#"> <FaFacebookF /></a></p>
            <p className="text-base lg:text-xl cursor-pointer"> <a href="#"><FaLinkedinIn /></a></p>
            <p className="text-base lg:text-xl cursor-pointer"><a href="#"><FaInstagram /></a></p>
            </div>
            <div className="w-[95%] lg:w-[60%]">
                <h3 className=" text-sm lg:text-base font-dm text-[#262626] text-center lg:static px-6 lg:px-0 py-1 lg:py-0">2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
            </div>
        </div>
    </Container>
  </div>
  )
}

export default Footer