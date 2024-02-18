import React from 'react'
import Container from './Container'
import Basicone from "../assets/basic-1.png"
import Basictwo from "../assets/basic-2.png"
import Basicthree from "../assets/basic-3.png"
import Basicfour from "../assets/basic-4.png"
import { FaCartPlus,FaHeart  } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";




const Basic = () => {

  return (

    <div className="py-6">
        <Container>
            <div className=" flex   gap-4">
                <div className=""> 
                <div className="relative group">
                    <img src={Basicone} alt="" />
                    <div className="absolute bottom-0 overflow-hidden left-0 w-[100%] duration-300 ease-in bg-[#ffffff] h-[0px] opacity-0 group-hover:h-[150px]  group-hover:opacity-100 ">
                        <div className="flex items-center h-full justify-end ">
                            <ul className=" px-11 lg:px-6 text-end">
                                <li className='font-dm font-semibolt text-[16px] text-[#222]'>Add to Wish List<FaHeart className="inline-block ml-3"/> </li>
                                <li className='mt-3 font-dm font-semibolt text-end text-[16px] text-[#222]'>Compare<FaCodeCompare className="inline-block ml-3"/></li>
                                <li className='mt-3 font-dm font-semibolt text-[16px] text-[#222]'>Add to Cart <FaCartPlus className="inline-block ml-3" /></li>
                            </ul>
                        </div>
                    </div>

                </div>
                    </div>






                <div className="relative group">
                    <img src={Basictwo} alt="" />
                    <div className="absolute bottom-0 overflow-hidden left-0 w-[100%] duration-300 ease-in bg-[#ffffff] h-[0px] opacity-0 group-hover:h-[150px]  group-hover:opacity-100 ">
                        <div className="flex items-center h-full justify-end ">
                            <ul className=" px-11 lg:px-6 text-end">
                                <li className='font-dm font-semibolt text-[16px] text-[#222]'>Add to Wish List<FaHeart className="inline-block ml-3"/> </li>
                                <li className='mt-3 font-dm font-semibolt text-end text-[16px] text-[#222]'>Compare<FaCodeCompare className="inline-block ml-3"/></li>
                                <li className='mt-3 font-dm font-semibolt text-[16px] text-[#222]'>Add to Cart <FaCartPlus className="inline-block ml-3" /></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="relative group">
                    <img src={Basicthree} alt="" />
                    <div className="absolute bottom-0 overflow-hidden left-0 w-[100%] duration-300 ease-in bg-[#ffffff] h-[0px] opacity-0 group-hover:h-[150px]  group-hover:opacity-100 ">
                        <div className="flex items-center h-full justify-end ">
                            <ul className=" px-11 lg:px-6 text-end">
                                <li className='font-dm font-semibolt text-[16px] text-[#222]'>Add to Wish List<FaHeart className="inline-block ml-3"/> </li>
                                <li className='mt-3 font-dm font-semibolt text-end text-[16px] text-[#222]'>Compare<FaCodeCompare className="inline-block ml-3"/></li>
                                <li className='mt-3 font-dm font-semibolt text-[16px] text-[#222]'>Add to Cart <FaCartPlus className="inline-block ml-3" /></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="relative group">
                    <img src={Basicfour} alt="" />
                    <div className="absolute bottom-0 overflow-hidden left-0 w-[100%] duration-300 ease-in bg-[#ffffff] h-[0px] opacity-0 group-hover:h-[150px]  group-hover:opacity-100 ">
                        <div className="flex items-center h-full justify-end ">
                            <ul className=" px-11 lg:px-6 text-end">
                                <li className='font-dm font-semibolt text-[16px] text-[#222]'>Add to Wish List<FaHeart className="inline-block ml-3"/> </li>
                                <li className='mt-3 font-dm font-semibolt text-end text-[16px] text-[#222]'>Compare<FaCodeCompare className="inline-block ml-3"/></li>
                                <li className='mt-3 font-dm font-semibolt text-[16px] text-[#222]'>Add to Cart <FaCartPlus className="inline-block ml-3" /></li>
                            </ul>
                        </div>
                    </div>

                </div>

             
            </div>

        </Container>
    </div>
  )
}

export default Basic