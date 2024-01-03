import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillMediumSquare } from "react-icons/ai";
import Foot from "./Foot.css"





const Footer = () => {
  return (

    <div className='footer-container'>
      <div className='left'>
        <a href="https://unilend.gitbook.io/unilend-finance/" target='blank'>
        <h3>Gitbook</h3>
        </a>


       <a href="https://github.com/UniLend/unilendv2" target='blank'>
       <h3>Github</h3>
       </a>

       <a href="https://www.youtube.com/channel/UCggNiVE5EGWGHh1YwIUW7Ug" target='blank'>
       <h3>Tutorial</h3>
       </a>
       
      </div>

      <div className='right'>
        {/* <AiFillTwitterCircle  className='icons' />
        <AiFillLinkedin className='icons' href=''/>
        <AiFillInstagram  className='icons'/>
        <AiFillMediumSquare  className='icons'/> */}


        <a href="https://twitter.com/UniLend_Finance" target='blank'>
        <AiFillTwitterCircle  className='icons' />
        </a>

        <a href="https://medium.com/@unilend" target='blank'>
          <AiFillMediumSquare  className='icons'/>
        </a>

        <a href="https://www.instagram.com/unilendfinance/" target='blank'>
        <AiFillInstagram  className='icons'/>
        </a>

        <a href="https://www.linkedin.com/company/unilend-finance/" target='blank'>
        <AiFillLinkedin className='icons' href=''/>
        </a>

      </div>
    </div>

  )
}

export default Footer
