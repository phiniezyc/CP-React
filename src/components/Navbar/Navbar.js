import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const NavBar = () => (
  <div>
    <Navbar brand='CP' left className='black' >
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/portfolio'>Portfolio</NavItem>
      <NavItem href='/bio'>Bio</NavItem>
    </Navbar>
  </div>
);

export default NavBar;
