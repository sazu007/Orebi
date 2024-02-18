import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHeart,FaCartShopping } from "react-icons/fa6";
import { IoGitCompare } from "react-icons/io5";
import axios from 'axios';
import { useState,useEffect } from 'react';
import Slider from "react-slick";
import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";

function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        style={{ position: 'absolute', right:"-20px", top:"40%", height:"40px", width:"40px", borderRadius:"50%", background:"#979797", transform: "-50%", translate: "-50%", zIndex: 1000}}
        onClick={onClick}
      ><BiSolidRightArrow className='mt-2 ml-2 text-2xl animate-ping text-white'/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{ position: 'absolute', left:"20px", top:"40%", height:"40px", width:"40px", borderRadius:"50%", background:"#979797", transform: "-50%", translate: "-50%",zIndex: 1000}}
        onClick={onClick}
      > <BiSolidLeftArrow className='mt-2 ml-1 text-2xl animate-ping text-white'/></div>
    );
  }

const Newarrive = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    let [info, setInfo] = useState([])
    useEffect(() =>{
        let getdata =() =>{
            axios.get("https://dummyjson.com/products").then((respone)=>{
            setInfo(respone.data.products);
            })
        }
        getdata()
    },[])

    return (

<div className="py-10">
    <Container>
        <h2 className='font-dm font-bolt text-[40px]'>New Arrival</h2>
            <Slider {...settings}> 
                {info.map((item)=>(
            <div className="!w-[95%]">

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
                        <p>{item.price}</p>
                    </div>

                </div>
            </div>
                      ))}
         </Slider>
        
    </Container>
</div>
    
  )
}

export default Newarrive