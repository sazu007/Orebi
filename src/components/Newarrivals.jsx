import React from 'react'
import { useState,useEffect } from 'react'
import Container from './Container'
import Flex from './Flex'
import Slider from "react-slick";
import { FaCartPlus,FaHeart  } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import axios from 'axios';
import { MdOutlineArrowBackIosNew,MdArrowForwardIos  } from "react-icons/md";
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{position: 'absolute', right: '-10px', top: '150px', height: '40px', width: '40px', borderRadius:'50%', background:'#979797', zIndex:'999', transform:'-50', translate:'-50', lineHeight:'40px !', textAlign:'center !', fontSize:'35px', color:'white'}}
        onClick={onClick}
      ><MdArrowForwardIos className=''/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        // className={className}
        style={{position: 'absolute', left: '-25px', top: '150px', height: '40px', width: '40px', borderRadius:'50%', background:'#979797', zIndex:'999', transform:'-50', translate:'-50', lineHeight:'0px !',  textAlign:'center !', fontSize:'35px', color:'white'}}
        onClick={onClick}
      ><MdOutlineArrowBackIosNew className=''/></div>
    );
  }

const Newarrivals = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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
    <div className='py-10'>
        <Container>
            <h2 className='font-dm font-bold text-[40px] text-[#262626]'>New Arrival</h2>
                <Slider {...settings}> 
                    {info.map((item)=>(
                <div className='!w-[95%]'>
                    <div className="py-3">
                    <div className="relative group">
                    <img src={item.thumbnail} className='h-[300px] w-full' alt="" />
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
                        <h3 className='font-dm font-bold text-[16px] text-[#262626]'>{item.title}</h3>
                        <p className='font-dm font-bold text-[16px] text-[#262626]'>{item.price}</p>
                    </div>
                    </div>
                </div>
                   ))}
                   </Slider>
        </Container>
    </div>
  )
}

export default Newarrivals