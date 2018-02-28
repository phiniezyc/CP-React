import React from 'react';
import {Footer} from 'react-materialize';

import './Footer.css';

const FooterPanel = () => (
  <div>
    <Footer 
      copyrights="© copyright 2018 Chance Phiniezy"
      
      links={
        <div className="footer-social-icons">
          
          <ul className="social-icons">
            <li><a href="https://twitter.com/philosophiezy" className="social-icon"> <i className="fa fa-twitter" /></a></li>
            <li><a href="https://stackoverflow.com/users/8266061/optimus-prime-time?tab=profile" className="social-icon"> <i className="fa fa-stack-overflow" /></a></li>

            <li><a href="https://github.com/phiniezyc" className="social-icon"> <i className="fa fa-github" /></a></li>
          </ul>
        </div>

        
  }
      className='example grey lighten-1'
    >
      <h4 className="white-text">Connect with Me:</h4>
      
    </Footer>
  </div>
);

export default FooterPanel;