import React from 'react'
import Token from "./Token.css"
import Eth from "../../assets/Eth-logo.png"
import Bnb from "../../assets/Bnb-logo.png"
import { FaAngleDown } from "react-icons/fa";
import ModalSort from '../ModalSearch/ModalSort';




// const TokenSlide = () => {
//   return (
//     <div>

//       <div>

//       <div className='Pool-container' >
//       <h2>New Pools</h2>
//       <div className='sort-button' >
//         <div>Sort By</div>
//         <FaAngleDown className='icon' />
//       </div>
//       </div>

//       <div className='slide-container'>

//       <div className='slide-box'>

//         <div>
//         <img src={Eth} alt="ETH" className='crypto-logo' />
//         <img src={Bnb} alt="BNB" className='crypto-logo1' />
//         </div>

//         <div className='token-ticker'>ETH / BNB</div>

//         <hr color='blue' size="1" />

//         <div className='supply'>
//         <h4>Total Supply</h4>
//         <h4>$1937.00</h4>
//         </div>

//         <div className='supply'>
//         <h4>Total borrowed</h4>
//         <h4>$2.00</h4>
//         </div>

//         <hr color='blue' size="1" />
//         <h4 style={{marginTop:"20px"}}>More Details</h4>
//       </div>


//       {/* <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div>


//       <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div>

//       <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div> */}

//       </div>

//     </div>






//     {/* <div>

//       <div className='Pool-container' >
//       <h2>High Liquidity Pools</h2>
//       <div className='sort-button' >
//         <div>Sort By</div>
//         <FaAngleDown className='icon' />
//       </div>
//       </div>

//       <div className='slide-container'>

//       <div className='slide-box'>

//         <div>
//         <img src={Eth} alt="ETH" className='crypto-logo' />
//         <img src={Bnb} alt="BNB" className='crypto-logo1' />
//         </div>

//         <h3>ETH/BNB</h3>

//         <hr color='blue' size="1" />

//         <div className='supply'>
//         <h4>Total Supply</h4>
//         <h4>$1937.00</h4>
//         </div>

//         <div className='supply'>
//         <h4>Total borrowed</h4>
//         <h4>$2.00</h4>
//         </div>

//         <hr color='blue' size="1" />
//         <h4>More Details</h4>
//       </div>


//       <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div>


//       <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div>

//       <div className='slide-box'>

//       <div>
//       <img src={Eth} alt="ETH" className='crypto-logo' />
//       <img src={Bnb} alt="BNB" className='crypto-logo1' />
//       </div>

//       <h3>ETH/BNB</h3>

//       <hr color='blue' size="1" />

//       <div className='supply'>
//       <h4>Total Supply</h4>
//       <h4>$1937.00</h4>
//       </div>

//       <div className='supply'>
//       <h4>Total borrowed</h4>
//       <h4>$2.00</h4>
//       </div>

//       <hr color='blue' size="1" />
//       <h4>More Details</h4>
//       </div>

//       </div>

//     </div>
//  */}
//     </div>
//   )
// }

// export default TokenSlide





const TokenSlide = () => {
  return (
    <div>


      <div>

      <div className='Pool-container' >
      <h2>New Pools</h2>
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





    {/* High :iquidy pools */}


    <div>

      <div className='Pool-container' >
      <h2>High Liquidity Pools</h2>
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

export default TokenSlide










