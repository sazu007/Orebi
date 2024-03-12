import React from 'react'
import Container from '../components/Container'
import { MdArrowForwardIos } from "react-icons/md";
import Aboutimg from "../assets/about_img1.png"
import Aboutimg2 from "../assets/about_img2.png"

const About = () => {
  return (
    <>
    <div className="py-10"> 
      <Container>
        <div className="text-[24px] text-[#262626] font-bold font-dm pt-5">
          <h3>About</h3>
        </div>
        <div className="flex items-center py-4">
          <h5 className='text-base font-dm'>Home</h5>
          <span className='px-3'><MdArrowForwardIos /></span>
          <p className='text-base font-dm'>About</p>
        </div>

        <div className="">
          <div className="flex justify-between">
            <div className="relative h-[400px] w-[400px] py-6">  
            <img className=" " src={Aboutimg} alt="" />
            <button className='absolute left-[30%] bottom-[30px] border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff] font-dm'><a  href="#">Our Brand</a></button>
          </div>
            <div className="relative h-[400px] w-[400px] py-6">  
            <img className=" " src={Aboutimg2} alt="" />
            <button className='absolute left-[30%] bottom-[20px] border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff] font-dm'><a  href="#">Our Stores</a></button>
          </div>
          </div>
        </div>
        <div className="w-full py-10">
          <h4 className="font-dm text-xl text-[262626]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        </div>
        <div className="flex text-justify justify-around items-center w-full gap-4 ">
          <div className="w-[500px]">
            <h3 className='text-base font-dm font-bold py-6'>Our Vision</h3>
            <p className='font-dm text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-[500px]">
            <h3 className='text-base font-dm font-bold py-6'>Our Story</h3>
            <p className='font-dm text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-[500px]">
            <h3 className='text-base font-dm font-bold py-6'>Our Brands</h3>
            <p className='font-dm text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </Container>
      </div>
    </>
  )
}

export default About
