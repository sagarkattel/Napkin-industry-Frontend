import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Ecard from '../components/Ecard'
import Cart from '../components/Cart'


const Home = () => {
  return (
    <div>
      <Navbar />
  
      <Ecard />

      <Cart />

      <Footer />
    </div>
  )
}

export default Home