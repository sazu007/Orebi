import React, { useContext, useRef, useState,useEffect,catOne,catTwo,showTab,showOne,setShowTabOne} from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import { Apidata } from '../components/ContextApi'
import Post from '../components/pagination/Post'
import PaginationNum from '../components/pagination/PaginationNum'


const Product = () => {
    let data = useContext(Apidata)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)

    let [showIcon, setShowIcon] = useState(false)
    let [show, setShow] = useState(false)
    let catOne = useRef()

    let [showTab, setShowTab] = useState(false)
    let [showOne, setShowOne] = useState(false)
    let catTwo = useRef()

    let [showTabOne, setShowTabOne] = useState(false)
    let [showTwo, setShowTwo] = useState(false)
    let catThree = useRef()

    let [showPrice, setShowPrice] = useState(false)
    let [showThree, setShowThree] = useState(false)
    let catFour = useRef()



    let pageNumber = []
    for(let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i)
    }



    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allPage = data.slice(firstPage, lastPage)

    let paginate = (pageNumber) =>{
      setCurrentPage(pageNumber + 1)
    }
      let next = () =>{
        if(currentPage < pageNumber.length){
          setCurrentPage((state)=>state + 1)
        }
      }
    

    let prve =() => {
      if(currentPage > 1){
        setCurrentPage((state)=>state - 1)
      }
    }

    useEffect(() =>{
document.addEventListener("click",(e)=>{
  if(catOne.current.contains(e.target) == true){
    setShow(!show)
    setShowIcon(!showIcon)
  }else{
    setShow(false)
    setShowIcon(!showIcon)
    setShowIcon(false)
  }
})
    },[show])


    useEffect(() =>{
      document.addEventListener("click",(e)=>{
        if(catTwo.current.contains(e.target) == true){
          setShowOne(!showOne)
          setShowTab(!showTab)
        }else{
          setShowOne(false)
          setShowTab(!showTab)
          setShowTab(false)
        }
      })
          },[showOne])

    useEffect(() =>{
      document.addEventListener("click",(e)=>{
        if(catThree.current.contains(e.target) == true){
          setShowTwo(!showTwo)
          setShowTabOne(!showTabOne)
        }else{
          setShowTwo(false)
          setShowTabOne(!showTabOne)
          setShowTabOne(false)
        }
      })
          },[showTwo])

    useEffect(() =>{
      document.addEventListener("click",(e)=>{
        if(catFour.current.contains(e.target) == true){
          setShowThree(!showThree)
          setShowPrice(!showPrice)
        }else{
          setShowThree(false)
          setShowPrice(!showPrice)
          setShowPrice(false)
        }
      })
          },[showThree])

  return (
    <div>
       <Container>
        <span className='font-dm font-normal text-[18px]'><Link to="/">Home</Link> / Products</span>
       
       <Flex>
      <div className="w-[20%]">

        <div className="">
          <h2 className="font-dm font-bold text-[18px] pt-3">Shop by Category</h2>

          <div ref={catOne} className="flex justify-between items-center px-2">
            <h4 className=' font-dm font-normal text-[18px] pt-2'>Category-1 </h4>
            {showIcon ? <FaMinus /> : <FaPlus />}
            </div>
            {show &&  <ul className='bg-[gray] py-4 px-2'>
              <li className=' font-dm font-normal text-[18px] py-4'>Catagory-2</li>
              <li className=' font-dm font-normal text-[18px] py-4'>Catagory-3</li>
              <li className=' font-dm font-normal text-[18px] py-4'>Catagory-4</li>
              <li className=' font-dm font-normal text-[18px] py-4'>Catagory-5</li>
            </ul>}
           
        </div>

        <div className="">
          <div ref={catTwo} className="flex justify-between items-center px-4 ">
            <h4 className='font-dm font-normal text-[18px] pt-4'>Shop by Color</h4>
            {showTab ? <TiArrowSortedDown className='text-[22px]'/> : <TiArrowSortedUp className='text-[22px]'/>}
            </div>
            {showOne && <ul>
              <li className='font-dm font-normal text-[18px] py-4'>Color-1</li>
              <li className='font-dm font-normal text-[18px] py-4'>Color-2</li>
              <li className='font-dm font-normal text-[18px] py-4'>Color-3</li>
              <li className='font-dm font-normal text-[18px] py-4'>Color-4</li>
              <li className='font-dm font-normal text-[18px] py-4'>Color-5</li>
            </ul>}
        </div>

        <div className="">
          <div ref={catThree} className="flex justify-between items-center px-4 ">
            <h4 className='font-dm font-normal text-[18px] pt-4'>Shop by Brand</h4>
            {showTabOne ? <TiArrowSortedDown className='text-[22px]'/> : <TiArrowSortedUp className='text-[22px]'/>}
            </div>
            {showTwo && <ul>
              <li className='font-dm font-normal text-[18px] py-4'>Brand-1</li>
              <li className='font-dm font-normal text-[18px] py-4'>Brand-2</li>
              <li className='font-dm font-normal text-[18px] py-4'>Brand-3</li>
              <li className='font-dm font-normal text-[18px] py-4'>Brand-4</li>
              <li className='font-dm font-normal text-[18px] py-4'>Brand-5</li>
            </ul>}
        </div>

        <div className="">
          <div ref={catFour} className="flex justify-between items-center px-4 ">
            <h4 className='font-dm font-normal text-[18px] pt-4'>Shop by Price</h4>
            {showPrice ? <TiArrowSortedDown className='text-[22px]'/> : <TiArrowSortedUp className='text-[22px]'/>}
            </div>
            {showThree && <ul>
              <li className='font-dm font-normal text-[18px] py-4'>$0.00 - $9.99</li>
              <li className='font-dm font-normal text-[18px] py-4'>$10.00 - $19.99</li>
              <li className='font-dm font-normal text-[18px] py-4'>$20.00 - $29.99</li>
              <li className='font-dm font-normal text-[18px] py-4'>$30.00 - $39.99</li>
              <li className='font-dm font-normal text-[18px] py-4'>$40.00 - $69.99</li>
            </ul>}
        </div>



        </div>
      <div className="w-[80%]">
        <div className="flex justify-between flex-wrap">
        <Post post={allPage}/>
        </div>
        <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} prve={prve} currentPage={currentPage}/>
      </div>
       </Flex>
       </Container>
    </div>
  )
}

export default Product