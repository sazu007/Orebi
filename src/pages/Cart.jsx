import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { IoIosArrowForward } from "react-icons/io";
import SunGlass from "../assets/special-4.png"
import { RxCross2 } from "react-icons/rx";
import { FaMinus,FaPlus } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Cart = () => {
    let data = useSelector((state) => state)
  return (
<>

<Container>
    <Flex>
<div className="w-full">
    <h2 className='font-dm font-bold text-[22px] text-[#262626] py-4'>Cart</h2>
    <h6 className='font-dm font-normal text-[16px] text-[#262626] flex items-center pb-14'> <Link to="/">Home</Link> <IoIosArrowForward className='ml-2 mr-2'/> <Link to="/contacts">Cart</Link> </h6>
    </div>
    <div className=" flex w-full justify-around items-center py-8 bg-gray-300 pt-10">
    <div className='font-dm font-bold text-[18px] text-[#262626]'> 
        <h2 className=''>Product</h2> 
        </div>
        <div className='font-dm font-bold text-[18px] text-[#262626]'> 
        <h2 className=''>Price</h2> 
        </div>
        <div className='font-dm font-bold text-[18px] text-[#262626]'> 
        <h2 className=''>Quantity</h2> 
        </div>
        <div className='font-dm font-bold text-[18px] text-[#262626]'> 
        <h2 className=''>Total</h2> 
        </div>
    </div>


<div className="flex justify-between items-center w-full px-32">
    <div className=" flex gap-8 items-center py-8 pl-[-30px]">
   <p className='font-bold text-xl'><RxCross2 /></p>
    <img className='h-[80px] w-[85px]' src={SunGlass} alt="" />
    <h5 className='font-dm font-bold text-[16px] text-[#262626]'>Product name</h5>
    </div>
    <div className=" py-8 ml-[-50px]">
    <h5 className='font-dm font-bold text-[16px] text-[#262626]'>$44.00</h5>
    </div>
    <div className="flex justify-between items-center h-[50px] w-[170px] border-2 border-gray-300"> 
        <h3 className='font-dm font-normal text-[16px] text-[#262626] pl-4'><FaMinus /></h3>
        <h3 className='font-dm font-normal text-[16px] text-[#262626] pl-4'>1</h3>
        <h4 className='text-[18PX] pr-4 '>{<FaPlus />}</h4>
    </div>
    <div className=" py-8">
    <h5 className='font-dm font-bold text-[16px] text-[#262626]'>$44.00</h5>
    </div>
   </div>

    <div className="flex w-full justify-around py-8">
    <div className="flex w-[50%] items-center gap-3">  
    <div className="flex border-2 border-gray-300 py-2 px-12 gap-24 items-center ">
        <h3 className='font-dm font-bold text-[16px] text-[#262626]'>SIZE</h3>
        <p className='text-xl'><TiArrowSortedDown /></p>
    </div>
    <h5 className='font-dm font-bold text-[16px] text-[#262626]'>Apply coupon</h5>
    </div>
    <h6 className='font-dm font-bold text-[16px] text-[#262626] pl-10'>Update cart</h6>
   </div>
    <div className="w-full flex justify-end">
        <div className=""></div> 
   <div className="justify-end py-8 items-end px-20">
   <h3 className='font-dm font-bold text-[16px] text-[#262626] pl-[450px]'>Cart Totals</h3>
    <div className="w-full flex gap-28 items-center py-6 pr-[350px]">
        <h3 className='font-dm font-bold text-[16px] text-[#262626]'>Subtotal</h3>
        <h4 className='font-dm font-bold text-[16px] text-[#262626]'>389.99 $</h4>
    </div>
    <div className="w-full flex gap-36 items-center py-6 pr-[350px]">
    <h3 className='font-dm font-bold text-[16px] text-[#262626]'>Total</h3>
    <h4 className='font-dm font-bold text-[16px] text-[#262626]'>389.99 $</h4>
    </div>
    <button className='border-2 border-solid border-gray-400 py-2 px-10 font-dm font-bold text-[16px] text-[#262626] hover:bg-black hover:text-white mt-4 ml-[300px]'>Proceed to Checkout</button>
   </div>
   </div> 
    </Flex>
</Container>
</>
    )
}

export default Cart