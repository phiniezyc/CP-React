import React from 'react';
import {Footer} from 'react-materialize';

const FooterPanel = () => (
  <div>
    <Footer 
      copyrights="©copyright 2017 Chance Phiniezy"
      
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
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>
  </div>
);

export default FooterPanel;