import React from 'react';
import  './MainIntro.css';

import chancePic from './rendiansyah-nugroho-496690-unsplash.jpg';

const MainIntro = () => (
  <div className='mainIntroDiv'>
    <h2>Chance Phiniezy</h2>
    <img src={chancePic} alt="chancePic" className="circle responsive-img" id='chancePic' />
    <h4>Full-Stack Development</h4> 
    
    
  </div>
);

export default MainIntro;