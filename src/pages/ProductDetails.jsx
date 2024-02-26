import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoIosStar,IoIosStarHalf  } from "react-icons/io";


const ProductDetails = () => {

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

  return (
<>
<Container> 
    <Flex className="justify-between"> 
    {data?.images?.map((item)=>(
        <div className="w-[32%"> 
    <img src={item} alt="" className='w-full' />
    </div>
))}

</Flex> 
<div className="">
    <h2 className='font-dm font-normal text-[34px] text-[#262626]'>Product</h2>
    <div className="">  
    <div className="flex">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStarHalf />
    </div>
    <span>Review</span>
        <h4 className='font-dm font- text-[34px] text-[#262626]'>$44.00</h4>
    </div>
</div>
</Container>
</>

    )
}

export default ProductDetails