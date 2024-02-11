import React from 'react'
import { useState,useEffect } from 'react';
import Container from './Container'
import Flex from "./Flex"
import Slider from "react-slick";
import { FaCartPlus,FaHeart  } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import axios from 'axios';
import { MdOutlineArrowBackIosNew,MdArrowForwardIos  } from "react-icons/md";
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{position: 'absolute', right: '0px', top: '150px', height: '40px', width: '40px', borderRadius:'50%', background:'#979797', zIndex:'999', transform:'-50', translate:'-50', lineHeight:'30px', textAlign:'center !', fontSize:'25px', color:'white'}}
        onClick={onClick}
      ><MdArrowForwardIos className=' ml-1 mt-1 animate-ping text-gray-600'/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{position: 'absolute', left: '-15px', top: '150px', height: '40px', width: '40px', borderRadius:'50%', background:'#979797', zIndex:'999', transform:'-50', translate:'-50', lineHeight:'30px !',  textAlign:'center !', fontSize:'25px', color:'white'}}
        onClick={onClick}
      ><MdOutlineArrowBackIosNew className='mt-1 ml-1 animate-ping text-gray-600'/></div>
    );
  }

const Newarrivals = () => {
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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


    useEffect(()=>{
        let getdata = () =>{
            axios.get("https://dummyjson.com/products").then((respone)=>{
                setInfo(respone.data.products);
            })
        }
        getdata()
    },[])

    return (
    <div className=' lg:py-8 pl-2'>
        <Container>
            <h2 className='font-dm font-bold text-[33px] pl-3 lg:pl-0 lg:text-[40px] text-[#262626]'>New Arrival</h2>
            <Flex> 
                <Slider {...settings}> 
                    {info.map((item)=>(
                <div className='!w-[95%]'>
                    <div className="py-3">
                    <div className="relative group">
                    <img src={item.thumbnail} className=' w-full' alt="" />
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
                    <div className="flex justify-between pt-3">
                        <h3 className='font-dm font-bold text-[16px] text-[#262626]'>{item.title}</h3>
                        <p className='font-dm font-bold text-[16px] text-[#262626]'>{item.price}</p>
                    </div>
                    </div>
                </div>
                   ))}
                   </Slider>
                   </Flex>
        </Container>
    </div>
  )
}

export default Newarrivals