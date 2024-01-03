import React from 'react'
import Hero from "./Hero.css"
import Banner from "../../assets/Banner.jpg"
import { FaAngleDown } from "react-icons/fa";
import ModalSearch from '../ModalSearch/ModalSearch';






const HeroSide = () => {
  return (
    
    <div>

    <div className='banner' >
      <img src={Banner} alt="banner" />
    </div>

    <div className='token-Bar'>

      <div className='manage-bar'>
        <div className='search-bar'>
        <div className='select-token'>Select Tokens</div>
        {/* <FaAngleDown className='search-icon' /> */}
        <ModalSearch  />
        </div>

        <div className='search-bar'>
        <div className='select-token'>Select Tokens</div>
        {/* <FaAngleDown className='search-icon' /> */}
        <ModalSearch  />
        </div>

        <div className='manage'>Manage Tokens</div>
        
      </div>

    </div>


    {/* <Button>thisva buton</Button> */}

    </div>
  )
}

export default HeroSide
