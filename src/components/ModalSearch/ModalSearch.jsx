import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaAngleDown } from "react-icons/fa";
import { Divider } from '@mui/material';

import ModalSe from "./ModalSe.css"

import Eth from "../../assets/Eth-logo.png"

import { MDBCol } from "mdbreact";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "380px",
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  borderRadius: "15px",
  // boxShadow: 24,
  py: 4,
  px:2,
  mx:'auto',
  display:'flex',
  flexDirection:'column',
  // gap:'12px',
  overflowY: 'scroll',
  height: "500px",

  /* Keyword values */

  

};



export default function ModalSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}><FaAngleDown className='search-icon' /></Button> */}

      <FaAngleDown className='search-icon' onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select Token 1
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <input /> */}

            <MDBCol md="8">
                <div className="active-pink-3 active-pink-4 mb-4">
                    <input className="form-control" type="text" placeholder="Search Tokens" aria-label="Search" />
                </div>
            </MDBCol>


          </Typography>

          {/* <Divider/> */}
            
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BTC</div>
                    <div className='p-title'>Bitcoin</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDT</div>
                    <div className='p-title'>Tether</div>
                </div>
            </div>
          </Typography>

        
          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ETH</div>
                    <div className='p-title'>Ethereum</div>
                </div>
            </div>
          </Typography>

        
          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDC</div>
                    <div className='p-title'>Usdc</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ADA</div>
                    <div className='p-title'>Cardano</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>


          {/* <Divider/>   */}


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDT</div>
                    <div className='p-title'>Tether</div>
                </div>
            </div>
          </Typography>

        
          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ETH</div>
                    <div className='p-title'>Ethereum</div>
                </div>
            </div>
          </Typography>

        

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDC</div>
                    <div className='p-title'>Usdc</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ADA</div>
                    <div className='p-title'>Cardano</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>


          {/* <Divider/>   */}


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDT</div>
                    <div className='p-title'>Tether</div>
                </div>
            </div>
          </Typography>

        
          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ETH</div>
                    <div className='p-title'>Ethereum</div>
                </div>
            </div>
          </Typography>

        

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>USDC</div>
                    <div className='p-title'>Usdc</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>ADA</div>
                    <div className='p-title'>Cardano</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>


          {/* <Divider/>   */}


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-flex'>
                <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=026" alt="Eth" className='modal-icons' />
                <div className='header-container'>
                    <div className='p-header'>BCH</div>
                    <div className='p-title'>Bitcoin Cash</div>
                </div>
            </div>
          </Typography>

          {/* <Divider/>   */}

         
        </Box>
      </Modal>
    </div>
  );
}





