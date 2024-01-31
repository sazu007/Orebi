import React from 'react'
import Banimg from "../assets/banner.png"
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top:"50%",
                left:"50px",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "#262626",
                padding: "20px 0",
                borderRight: "3px #fff solid"
              }}
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <> 
<Slider {...settings}>
    <div className="">
        <img src={Banimg} alt="" />
    </div>
    <div className="">
        <img src={Banimg} alt="" />
    </div>
    <div className="">
        <img src={Banimg} alt="" />
    </div>
</Slider>
</>
  )
}

export default Banner