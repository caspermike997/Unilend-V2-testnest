import React from 'react'
import Nav from "./Nav.css"
import Logo from  "../../assets/logo.png"
import Lock from "../../assets/lock.png"
import Wallet from "../../assets/Wallet.png"
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom'




const NavBar = () => {
  return (
    // <div className='nav-container'>
    // <img src={Logo} alt="Logo"  />

    // <nav>
    //     <ul>
    //         <li>Home</li>
    //         <li></li>
    //     </ul>
    // </nav>

    // </div>

    <div className='navbar-container'>
      <Link to='/'>
      <div className='image-div' >
       <img src={Logo} alt="Logo" className='logo' />
     </div>
     </Link> 
      <nav className='nav-bar'>


                <ul className='right'>
                   <Link to='pool'> <li className='menu' > Pools</li></Link>
                    <li className='menu-'> Dashboard <img src={Lock} alt="Lock" className='lock-icons' /></li>
                    <li className='menu-'> Governance <img src={Lock} alt="Lock" className='lock-icons' /></li>
                    <li className='menu-'> Rewards <img src={Lock} alt="Lock" className='lock-icons' /></li>


                    {/* <li className='menu'>  <img src={Lock} alt="Lock" className='lock-icon' />Dashboard</li>
                    <li className='menu'>  <img src={Lock} alt="Lock" className='lock-icon' />Governace</li>
                    <li className='menu'>  <img src={Lock} alt="Lock" className='lock-icon' />Rewards</li> */}
                    <li className='menu'> History</li>
                    <li className='menu'> Faucet</li>
                </ul>
                
      </nav>

      <div className='button-container'>  
         {/* <button> <img src={Wallet} alt="Icon" className='wallet-icon' /> Connect Wallet </button> */}
         <img src={Wallet} alt="Icon" className='wallet-icon' />
         <div className='connect-wallet'>Connect Wallet</div>
      </div>

      <MdDarkMode  className='dark-icon'/>

    </div>
  )
}

export default NavBar
