import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar,IoIosStarHalf  } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaMinus,FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/singleSlice';


const ProductDetails = () => {
    let dispatch = useDispatch()

    let [data,setData] = useState([])
    let productId = useParams()

   let dataId = () =>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
        setData(response.data);
    })
        
    }


    useEffect(()=>{
      dataId()
    },[])

    let handleproduct = (item) =>{
        dispatch(addToCart({...item, qun:1}))
    }

  return (
<>
<Container> 
    <Flex className="justify-between"> 
    {data?.images?.map((item)=>(
        <div className="w-[32%]"> 
    <img src={item} alt="" className='w-full' />
    </div>
))}

</Flex> 
<div className="">
    <h2 className='font-dm font-bold text-[39px] text-[#262626]'>Product</h2>
    <div className="">  
    <div className="flex items-center">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStarHalf />
    <span className='pl-8 font-dm font-normal text-[14px] text-[#262626] py-6'>1 Review</span>
    </div>
    <div className="flex"> 
        <del className='font-dm font- text-[18px] font-normal text-[#262626]'>$88.00</del>
        <h4 className='font-dm font- text-[20px] font-bold text-[#262626] pl-6'>$44.00</h4>
    </div>

    <div className="flex gap-12 items-center py-8">
        <h3 className='font-dm font-bold text-[18px] text-[#262626] pr-6'>COLOR:</h3>
        <div className="flex gap-3 ">
            <h3 className='h-5 w-5 rounded-full bg-gray-600'></h3>
            <h4 className='h-5 w-5 rounded-full bg-[#FF8686]'></h4>
            <h5 className='h-5 w-5 rounded-full bg-[#7ED321]'></h5>
            <h6 className='h-5 w-5 rounded-full bg-[#767676]'></h6>
            <h6 className='h-5 w-5 rounded-full bg-[#15CBA5]'></h6>
        </div>
    </div>
    <div className="flex gap-12 items-center py-8">
        <h3 className='font-dm font-bold text-[18px] text-[#262626] pr-12'>SIZE:</h3>
            <div className=" flex justify-between items-center h-[50px] w-[170px] border-2 border-gray-300"> 
            <h3 className='font-dm font-bold text-[20px] text-[#262626] pl-4'>S</h3>
            <h4 className='text-3xl pr-4 '>{<TiArrowSortedDown />}</h4>
        </div>
    </div>
    <div className="flex gap-12 items-center py-8">
        <h3 className='font-dm font-bold text-[18px] text-[#262626]'>QUANTITY:</h3>
            <div className="flex justify-between items-center h-[50px] w-[170px] border-2 border-gray-300"> 
            <h3 className='font-dm font-normal text-[16px] text-[#262626] pl-4'><FaMinus /></h3>
            <h3 className='font-dm font-normal text-[16px] text-[#262626] pl-4'>1</h3>
            <h4 className='text-[18PX] pr-4 '>{<FaPlus />}</h4>
        </div>
    </div>
        <div className="flex">
            <h2 className='font-dm font-bold text-[18px] text-[#262626]'>STATUS:</h2>
            <h3 className='font-dm font-normal text-[16px] text-[#262626] pl-8'>In stock</h3>
        </div>

        <div className="flex gap-4 py-10 ">
            <div className=""> 
            <button className=' border-2 border-solid border-gray-600 px-24 py-4 font-dm font-bold text-[18px] text-[#262626] hover:text-white hover:bg-black duration-500 text-center'>Add to Wish List</button>
            </div>
            <div className=""> 
            <Link to="/cart"> 
            <button onClick={()=>handleproduct(data)} className=' border-2 border-solid border-gray-600 px-24 py-4 font-dm font-bold text-[18px] text-[#262626]  hover:text-white hover:bg-black duration-500'>Add to Cart</button>
            </Link>  
            </div>
        </div>
            <div className="py-8">
                <h2 className='font-dm font-bold text-[22px] text-[#262626]'>FEATURES  & DETAILS</h2>
                <h3 className='ont-dm font-bold text-[22px] text-[#262626] py-6'>SHIPPING & RETURNS</h3>
                <p className='font-dm font-normal text-[18px] text-[#262626] w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        <div className="">
            <div className="">
                <h2 className='font-dm font-normal text-[18px] text-[#262626]'>Description</h2>
                <h3 className='font-dm font-normal text-[18px] text-[#262626] py-6'>Reviews (1)</h3>  
            </div>
            <h4 className='font-dm font-normal text-[18px] text-[#262626]'>1 review for Product</h4>
            <div className="flex items-center gap-6 py-8">
                <h3 className='font-dm font-normal text-[18px] text-[#262626]'>John Ford</h3>
                <p className='flex'> <IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></p>
            </div>
            <p className='w-[1600px] font-dm font-normal text-[18px] text-[#262626]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

<div className="">
    <h3>Add a Review</h3>
    <h5>Name:</h5>
    <input type="text" placeholder='Your name here'></input>
</div>
    </div>
</div>
</Container>
</>

    )
}

export default ProductDetails