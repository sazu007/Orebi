import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";
import Banner from './../components/Banner';

const Error = () => {
  return (
   
   <div className="py-8">
    <Container>
      <div className="items-center justify-center">
        <h2 className='font-dm font-extrabold text-[200px] text-[#262626] justify-center text-center'>404</h2>
        <p className='font-dm font-normal text-base text-[#262626] py-4 justify-center text-center w-[650px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className="relative w-[643px] "> 
        {/* <div className="py-6">  */}
       <input type="search" placeholder='Type to search......' className='py-3 border-2 outline-0 w-[643px] pl-3'></input>
       {/* </div> */}
       <div className="absolute top-[40%] right-[20px] text-xl"> 
       <FaSearch className=''/>
      </div>
      </div>
      <div className="py-5">
        <button className='border-2 border-solid border-black py-4 px-10 hover:bg-[#262626] font-dm text-base hover:text-white'>Back to Home</button>
      </div>
      </div>
    </Container>
   </div>
  )
}

export default Error