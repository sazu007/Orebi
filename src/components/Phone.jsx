import React from 'react'
import Phoneimg from "../assets/phone.png"
import Container from './Container'
import Flex from './Flex'

const Phone = () => {
  return (
<div className=" py-2 lg:py-10">  
<Container> 
    <Flex> 
        <div className="flex justify-around]">
            <div className="w-[30%] lg:w-[48%] pl-2">
                <img className="h-[105px] lg:h-full lg:static" src={Phoneimg} alt="phone" />
            </div>
            <div className="w-[65%] pl-2 lg:w-[48%] mt-[-5px] lg:mt-0">
                <h3 className='font-dm text-[18px] font-bold lg:text-[40px] text-[#262626] lg:pb-6 lg:mt-8 w-[200px] lg:w-full lg:static'>Phone of the year</h3>
                <p className='font-dm  text-[12px]  lg:text-base text-[#262626] w-[230px] lg:w-[500px] pb-1 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <button className='border-1 border-solid lg:border-2  border-[#262626] lg:mt-8 lg:py-2 px-5 lg:px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm lg:font-bolt text-xs lg:text-base" href="#">Shop Now</a></button>
            </div>
        </div>
        </Flex>
        </Container>
    </div>
    )
}

export default Phone