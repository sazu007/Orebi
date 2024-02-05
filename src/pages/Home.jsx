import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Saleitem from '../components/Saleitem'
import Newarrivals from '../components/Newarrivals'
import Phone from '../components/Phone'
import Special from '../components/Special'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
     <Header/>
     <Navbar/>
     <Banner/>
     <Saleitem/>
     <Newarrivals/>
     <Phone/>
     <Special/>
    <Footer/>
    </div>
  )
}

export default Home