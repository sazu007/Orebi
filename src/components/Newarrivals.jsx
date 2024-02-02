import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Newone from "../assets/newone.png"
import { FaCartPlus,FaHeart  } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Newarrivals = () => {
  return (
    <div className='py-10'>
        <Container>
            <h2 className='font-dm font-bold text-[40px] text-[#262626]'>New Arrival</h2>
            <Flex>
                <div className="w-[24%]">
                    <div className="py-3">
                    <div className="relative group">
                    <img src={Newone} alt="" />
                    <div className="absolute bottom-0 overflow-y-hidden left-0 w-full h-[0px] opacity-0 duration-300 ease-in bg-[#fff] group-hover:h-[200px]  group-hover:opacity-100">
                        <div className="flex justify-end items-center h-full ">
                            <ul className="px-6 text-end">
                                <li className='font-dm font-semibolt text-[16px] text-[#222]'>Add to Wish List<FaHeart className="inline-block ml-3"/> </li>
                                <li className='mt-3 font-dm font-semibolt text-end text-[16px] text-[#222]'>Compare<FaCodeCompare className="inline-block ml-3"/></li>
                                <li className='mt-3 font-dm font-semibolt text-[16px] text-[#222]'>Add to Cart <FaCartPlus className="inline-block ml-3" /></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-between pt-3">
                        <h3 className='font-dm font-bold text-[16px] text-[#262626]'>Basic Cr    ew Neck Tee</h3>
                        <p className='font-dm font-bold text-[16px] text-[#262626]'>$44.00</p>
                    </div>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Newarrivals