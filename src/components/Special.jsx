import React from 'react'
import Container from './Container'
import Specialone from "../assets/special-1.png"
import Specialtwo from "../assets/special-2.png"
import Specialthree from "../assets/special-3.png"
import Specialfour from "../assets/special-4.png"

const Special = () => {
  return (
<div className="py-10">
<Container>
    <h2 className='py-4 font-dm font-semibold text-[40px] text-[#262626]'>Special Offers</h2>
    <div className="flex gap-6">
    <div className="w-[23%] relative">
        <img src={Specialone} alt="" />
        <div className="flex justify-between">
            <h3 className="font-dm text-xl text-[#262626] py-4">Basic Crew Neck Tee</h3>
            <h4 className="font-dm text-base text-[#262626] py-4">$44.00</h4>
        </div>
        <p className="font-dm text-base text-[#262626]">Black</p>
        <div className="absolute left-[20px] top-[20px]">
        <button className='border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm " href="#">New</a></button>
        </div>
    </div>
    <div className="w-[23%] relative">
        <img src={Specialtwo} alt="" />
        <div className="flex justify-between">
            <h3 className="font-dm text-xl text-[#262626] py-4">Basic Crew Neck Tee</h3>
            <h4 className="font-dm text-base text-[#262626] py-4">$44.00</h4>
        </div>
        <p className="font-dm text-base text-[#262626]">Black</p>
        <div className="absolute left-[20px] top-[20px]">
        <button className='border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm " href="#">New</a></button>
        </div>

    </div>
    <div className="w-[23%] relative">
        <img src={Specialthree} alt="" />
        <div className="flex justify-between">
            <h3 className="font-dm text-xl text-[#262626] py-4">Basic Crew Neck Tee</h3>
            <h4 className="font-dm text-base text-[#262626] py-4">$44.00</h4>
        </div>
        <p className="font-dm text-base text-[#262626]">Black</p>
        <div className="absolute left-[20px] top-[20px]">
        <button className='border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm " href="#">New</a></button>
        </div>

    </div>
    <div className="w-[23%] relative">
        <img src={Specialfour} alt="" />
        <div className="flex justify-between">
            <h3 className="font-dm text-xl text-[#262626] py-4">Basic Crew Neck Tee</h3>
            <h4 className="font-dm text-base text-[#262626] py-4">$44.00</h4>
        </div>
        <p className="font-dm text-base text-[#262626]">Black</p>
        <div className="absolute left-[20px] top-[20px]">
        <button className='border-2  border-[#262626] py-1 px-8 hover:bg-[#262626] hover:text-[#ffff]'><a className="font-dm " href="#">New</a></button>
        </div>

    </div>
    </div>
</Container>
</div>

    )
}

export default Special