import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import './Engine.css';
import {Game} from './Game';

// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { 
  Button, Slider, 
  Typography, 
  Box, 
  ThemeProvider, 
  Accordion, Modal
 } from '@mui/material';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




// 
// 
// 
function ButtonUsage() {
  return (
    <Button variant="contained">Hello world</Button>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

function ModalUsage() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* @ts-ignore */}
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

function BoxSx() {

  let theme = {
    palette: {
      primary: {
        main: '##8a919b',
        dark: '#36393e',
      },
    },
  }

  let sx_style = {
    width: 350,
    height: 700,
    borderRadius: 1,
    bgcolor: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  }

  return (
    <ThemeProvider
      theme={ theme }
    >
      <Box
        sx={ sx_style }
      />
    </ThemeProvider>
  );
}

function AccordionExpandIcon() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function Gui() {
  return (
    <div className="gui__container">
      <div className="config__box">
        {/* <BoxSx /> */}
        
        <Typography id="gui-config-title" variant="h6" component="h2">
          Game
        </Typography>
        
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        
        {/* <AccordionExpandIcon /> */}
      </div>
    </div>
    );
}
// 
// 
// 



export function Engine() {

  return (
    <div className="app__container">
      {/* <Gui /> */}
      <Game />
    </div>
  );

}
