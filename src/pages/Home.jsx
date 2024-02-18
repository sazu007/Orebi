import React from 'react'
import Banner from '../components/Banner'
import Saleitem from '../components/Saleitem'
import Phone from '../components/Phone'
import Special from '../components/Special'
import Newarrive from '../components/Newarrive'
import Basic from '../components/Basic'

const Home = () => {
  return (
    <div>
     <Banner/>
     <Saleitem/>
     <Newarrive/>
     <Basic/>
     <Phone/>
     <Special/>
    </div>
  )
}

export default Home