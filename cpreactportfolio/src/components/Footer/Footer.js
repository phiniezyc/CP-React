import React from 'react';
import {Footer} from 'react-materialize';

const FooterPanel = () => (
  <div>
    <Footer 
      copyrights="© copyright 2018 Chance Phiniezy"
      
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>
  }
      className='example grey lighten-1'
    >
      <h4 className="white-text">Connect with Me:</h4>
      
    </Footer>
  </div>
);

export default FooterPanel;