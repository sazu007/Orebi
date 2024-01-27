import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars, FaCartPlus,FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  return (
  
    <nav>
        <Container>
            <Flex>
            <div className="w-1/4">
                <div className="">
                <FaBars />
                    <p>Shop by Category</p>
                </div>

            </div>
            <div className="w-2/4">
            <input type="search"/>
            </div>
            <div className="w-1/4">
                <div className="">
                <FaUser />
                </div>
                <div className="">
                <TiArrowSortedDown />                </div>
                <div className="">
                <FaCartPlus />

                </div>
            </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar