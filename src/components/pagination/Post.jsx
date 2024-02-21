import React from 'react'
import { FaHeart,FaCartShopping } from "react-icons/fa6";
import { IoGitCompare } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Post = ({post}) => {
  return (
<>

{post.map((item) =>(
    <div className="!w-[32%]">
        <Link to={`/product/${item.id}`}>

<div className="py-3">
    <div className="relative group">
        <img src={item.thumbnail} className="h-[300px] w-full" alt="" />
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
        <h3 className='font-dm font-bolt text-[16px'>{item.title}</h3>
        <p>${item.price}</p>
    </div>
    </div>
        </Link>
        </div>
            ))}

</>

    )
}

export default Post