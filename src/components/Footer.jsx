import React from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
  <div className="py-10">
    <Container>
        <div className="flex justify-between pl-10">
            <div className="w-[12%] list-none">
                <ul> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">MENU</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Home</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">About</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Contact</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Journal</li>
              
                </ul>
            </div>
            <div className="w-[12%] list-none">
                <ul> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">SHOP</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Category 1</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Category 2</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Category 3</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Category 4</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Category 5</li>
              
                </ul>
            </div>
            <div className="w-[12%] list-none">
                <ul> 
                <li className="text-base font-dm font-semibold text[#262626] py-4">HELP</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Privacy Policy</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Terms & Conditions</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Special E-shop</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Shipping</li>
                <li className="text-sm font-dm text-[#6D6D6D] py-2">Secure Payments</li>
              
                </ul>
            </div>
            <div className="w-[35%] list-none">
                <ul className='pl-12'> 
                <li className="text-base font-dm font-bold text-[#262626] py-2">(052) 611-5711</li>
                <li className="text-base font-dm font-bold text-[#262626]">company@domain.com</li>
                <li className="text-base font-dm  text-[#262626] py-2">575 Crescent Ave. Quakertown, PA 18951</li>
              
                </ul>
            </div>
            <div className="w-[25%] list-none">
                <img className="w-[110px] h-[29px]" src={Logo} alt="" />
            </div>
        </div>
        <div className=" flex justify-between py-10">
            <div className="flex gap-6 pl-10">
            <p className="text-xl cursor-pointer"><a href="#"> <FaFacebookF /></a></p>
            <p className="text-xl cursor-pointer"> <a href="#"><FaLinkedinIn /></a></p>
            <p className="text-xl cursor-pointer"><a href="#"><FaInstagram /></a></p>
            </div>
            <div className="">
                <h3 className="text-base font-dm text-[#262626]">2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
            </div>
        </div>
    </Container>
  </div>
  )
}

export default Footer