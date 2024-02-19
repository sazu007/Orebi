import React, { useContext } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import ImgX from "../assets/basic-1.png"
import { FaHeart,FaCartShopping } from "react-icons/fa6";
import { IoGitCompare } from "react-icons/io5";
import { Apidata } from '../components/ContextApi'


const Product = () => {
    let data = useContext(Apidata)

  return (
    <div>
       <Container>
        <span className='font-dm font-normal text-[18px]'><Link to="/">Home</Link> / Products</span>
       
       <Flex>
      <div className="w-[20%]">
        <h2>Under Construction</h2>
        </div>
      <div className="w-[80%]">
        <div className="flex justify-between flex-wrap">
           {data.map((item) =>(
    <div className="!w-[32%]">
<div className="py-3">
    <div className="relative group">
        <img src={ImgX} className="h-[300px] w-full" alt="" />
        <div className="absolute bottom-0 overflow-y-hidden left-0 w-[100%] duration-300 ease-in bg-[#fff] h-[0px] opacity-0 group-hover:h-[200px] group-hover:opacity-100">
            <div className="flex items-center h-full justify-end">
                <ul className='px-6 text-end'>
                    <li className=' text-[#222] font-dm font-normal text-[16px]'>Add to Wish List <FaHeart className='inline-block'/></li>
                    <li className=' text-[#222] font-dm font-normal text-[16px]'>Compare <IoGitCompare className='inline-block'/></li>
                    <li className=' text-[#222] font-dm font-normal text-[16px]'>Add to Cart <FaCartShopping className='inline-block'/></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="flex justify-between pt-3">
        <h3 className='font-dm font-bolt text-[16px'>kICHU AKTA</h3>
        <p>$00</p>
    </div>
    </div>
        </div>
            ))}
        </div>
      </div>
       </Flex>
       </Container>
    </div>
  )
}

export default Product