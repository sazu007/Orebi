import React from 'react'
import Phoneimg from "../assets/phone.png"
import Container from './Container'

const Phone = () => {
  return (
<div className="py-10">  
<Container> 
        <div className="flex justify-around">
            <div className="w-[48%]">
                <img src={Phoneimg} alt="phone" />
            </div>
            <div className="w-[48%]">
                <h3 className='font-dm text-[40px] text-[#262626] pb-6 mt-8'>Phone of the year</h3>
                <p className='font-dm text-base text-[#262626] w-[500px] pb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <button className='border-2  border-[#262626] mt-8 py-2 px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm font-bolt " href="#">Shop Now</a></button>
            </div>
        </div>
        </Container>
    </div>
    )
}

export default Phone