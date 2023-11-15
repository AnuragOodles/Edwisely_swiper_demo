import * as React from 'react';
import './App.css';
import Swiper from 'swiper';
import RemedialStudyContent from './components/swiper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};


function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Button size='large' sx={{marginTop:'10%'}} variant='contained' onClick={handleOpen}>Open Modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <Box sx={style}>
                <RemedialStudyContent />
                </Box>
      </Modal>
    </div>
  );
}

export default App;
