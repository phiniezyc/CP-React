import React from 'react';
import './LandingPage.css'

import MainIntro from '../../components/MainIntro/MainIntro';
import  nikePhoto from './xavier-teo-469050-unsplash.jpg';
import headphonePhoto from './frank-septillion-208829-unsplash.jpg';

const LandingPage = () => (
  <div className='flex-container centerPanel'>
    <div className='Panel1 columnSection'>
      <img src={nikePhoto} alt="nikePhoto" className="responsive-img" id='nikePhoto' />
    </div>
    <div className='Panel2 columnSection'>
      <MainIntro />
    </div>
    <div className='Panel3 columnSection'>
      <img src={headphonePhoto} alt="headphonePhoto" className="responsive-img" id='headPhonePhoto'  />
    </div>
  </div>
);

export default LandingPage;
