import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Saleitem from '../components/Saleitem'
import Newarrivals from '../components/Newarrivals'

const Home = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     <Banner/>
     <Saleitem/>
     <Newarrivals/>
    </div>
  )
}

export default Home