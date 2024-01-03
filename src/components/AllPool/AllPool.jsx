import React from 'react'

// import HeroSide from '../components/Hero/HeroSide'
// import TokenSlide from '../components/TokenSlide/TokenSlide'

import All from "../AllPool/All.css"
import ModalSearch from '../ModalSearch/ModalSearch'



import Logo from  "../../assets/logo.png"
import Lock from "../../assets/lock.png"
import Wallet from "../../assets/Wallet.png"
import { MdDarkMode } from "react-icons/md";


import Poolbanner from "../../assets/poolbanner.svg"
import { FaAngleDown } from "react-icons/fa";


import Eth from "../../assets/Eth-logo.png"
import Bnb from "../../assets/Bnb-logo.png"

import ModalSort from '../ModalSearch/ModalSort'




const AllPool = () => {
  return (
    <div>
      <div className='navbar-container'>
      <div className='image-div' >
        <img src={Logo} alt="Logo" className='logo' />
     </div>

      <nav className='nav-bar'>

                <ul className='right'>
                  <div className='pools'>
                  <li className='menu pool' > Pools</li>
                  </div>
                    
                    <li className='menu-'> Dashboard <img src={Lock} alt="Lock" className='lock-icons' /></li>
                    <li className='menu-'> Governance <img src={Lock} alt="Lock" className='lock-icons' /></li>
                    <li className='menu-'> Rewards <img src={Lock} alt="Lock" className='lock-icons' /></li>

                    <li className='menu'> History</li>
                    <li className='menu'> Faucet</li>
                </ul>
                
      </nav>

      <div className='button-container'>  
         
         <img src={Wallet} alt="Icon" className='wallet-icon' />
         <p className='connect-wallet'>Connect Wallet</p>
      </div>

      <MdDarkMode  className='dark-icon'/>

    </div>




    {/* Pool Banner and select token  */}

    <div>
    <div className='pool-banner' >
      <img src={Poolbanner} alt="pool-banner" className='bannar-image'/>
    </div>

    <div className='token-Bar-pool'>

     


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

    </div>



{/* ALl Pool And Sort Section */}
    

<div>

      <div className='Pool-container' >
        
        <div className='pool-div'>
        <div className='app-pool'>All Pools</div>
        </div>
      
      <div className='sort-button' >
        <div className='sort'>Sort By</div>
        {/* <FaAngleDown className='icon' /> */}
        <ModalSort />
      </div>
      </div>

      <div className='slide-container'>

      <div className='slide-box'>

        <div>
        <img src={Eth} alt="ETH" className='crypto-logo' />
        <img src={Bnb} alt="BNB" className='crypto-logo1' />
        </div>

        <div className='token-ticker'>ETH / BNB</div>

        <hr color='blue' size="1" />

        <div className='supply'>
        <h4>Total Supply</h4>
        <h4>$1937.00</h4>
        </div>

        <div className='supply'>
        <h4>Total borrowed</h4>
        <h4>$2.00</h4>
        </div>

        <hr color='blue' size="1" />
        <h4 style={{marginTop:"20px"}}>More Details</h4>

      </div>

      </div>

    </div>




    

    
    </div>
  )
}

export default AllPool
