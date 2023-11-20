import React from 'react'
import Navbar from '../components/Navbar'

import Shipping from './shipping'
// import Title from './title'

import Footer from '../components/Footer'
import Ecard from '../components/Ecard'
import Cart from '../components/Cart'
import Banner from './banner'


const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <Shipping />   

      <div className='mx-[5rem] text-xl font-medium uppercase'>Our Best Sellling</div>
      <Ecard />

      <div className='mx-[5rem] mt-[2rem] text-xl font-medium uppercase'>Feature Products</div>
      <Ecard />

      <div className='mx-[5rem] mt-[2rem] text-xl font-medium uppercase'>Product of the week</div>
      <Ecard />

      <Cart />

      <Footer />
    </div>
  )
}

export default Home