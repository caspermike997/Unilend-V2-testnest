import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaAngleDown, } from "react-icons/fa";
import { Divider } from '@mui/material';

import ModalSe from "./ModalSe.css"

// import Eth from "../../assets/Eth-logo.png"

import { MDBCol } from "mdbreact";



const stylesort = {
    position: 'absolute',
    top: '80%',
    left: '90%',
    transform: 'translate(-50%, -50%)',
    width: "100px",
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: "15px",
    // boxShadow: 24,
    p: 4,
  
    // overflowY: 'scroll',
    // height: "100px",
  
    /* Keyword values */
  
    
  
  };


const ModalSort = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
     {/* <Button onClick={handleOpen}><FaAngleDown className='icon' /></Button> */}

     <FaAngleDown className='icon' onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={stylesort}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-sort'>
               
                <div className='created'>Created</div>
            </div>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='modal-sort'>
              
                <div className='created'>Created</div>
            </div>
          </Typography>

        </Box>
      </Modal>
    </div>
  )
}

export default ModalSort




// Note : The CSS Styling for ModalSort is found in modalSe.css