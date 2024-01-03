import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroSide from '../components/Hero/HeroSide'
import Footer from '../components/Footer/Footer'
import TokenSlide from '../components/TokenSlide/TokenSlide'
import ModalSearch from '../components/ModalSearch/ModalSearch'


const Home = () => {
  return (
    <div>
    <NavBar />
    <HeroSide />
    {/* <ModalSearch /> */}
    <TokenSlide />
    <Footer />
    </div>
  )
}




export default Home
