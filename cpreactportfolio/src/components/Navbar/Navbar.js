import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const NavBar = () => (
  <div>
    <Navbar brand='Chance' right className='grey lighten-1' >
      <NavItem href='/gallery'>Gallery</NavItem>
      <NavItem href='/'>Bio</NavItem>
    </Navbar>
  </div>
);

export default NavBar;
