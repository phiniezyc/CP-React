import React from 'react';
import { Button, Dropdown, NavItem } from 'react-materialize';
import  './MainIntro.css';

import chancePic from './rendiansyah-nugroho-496690-unsplash.jpg';

const MainIntro = () => (
  <div className='mainIntroDiv'>
    <h2>Chance Phiniezy</h2>
    <img src={chancePic} alt="chancePic" className="circle responsive-img" id='chancePic' />
    <h4>Full-Stack Development</h4> 
    <Dropdown trigger={
      <Button>Enter Here</Button>
	}
    >
      <NavItem href="/portfolio"> Portfolio</NavItem>
      <NavItem divider />
      <NavItem href="/bio" >About Me</NavItem>
      <NavItem divider />
      <NavItem href="https://github.com/phiniezyc" >GitHub</NavItem>
    </Dropdown>
    <br />
    
  </div>
);

export default MainIntro;