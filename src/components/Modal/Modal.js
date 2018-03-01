import React from 'react';
import {Modal, Button} from 'react-materialize';
import './Modal.css';




const ModalComponent = () => (
  <div className='container instruction'>
    <div >
      <Modal
        className='instruction'
        header='Click on the Projects'
        trigger={<Button className='red darken-4'>Click for Instructions</Button>}
      >
        <p>Click each project to reveal more information about the project and technology used. Click the buttons on each individual project to see a demo and the github code behind each project.</p>
      </Modal>
        
    </div>
    
    
  </div>
  );
  
  export default ModalComponent;