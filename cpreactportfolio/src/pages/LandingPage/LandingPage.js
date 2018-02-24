import React from 'react';
import './LandingPage.css'

import  nikePhoto from './xavier-teo-469050-unsplash.jpg';

const LandingPage = () => (
  <div className='flex-container centerPanel'>
    <div className='Panel1'>
      <img src={nikePhoto} alt="nikePhoto" className="responsive-img"  />
    </div>
    <div className='Panel2'>
      <h1> Hello </h1>
    </div>
    <div className='Panel3'>
      <h1> Panel 3 </h1>
      
    </div>
  </div>
);

export default LandingPage;
