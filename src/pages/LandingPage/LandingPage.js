import React from 'react';
import {Row, Col, Icon} from 'react-materialize';

import './LandingPage.css'

import MainIntro from '../../components/MainIntro/MainIntro';
import  nikePhoto from './xavier-teo-469050-unsplash.jpg';
import headphonePhoto from './frank-septillion-208829-unsplash.jpg';
import personalPhoto from './personalPhoto.jpg';

const LandingPage = () => (
  <div>
    {/* <div className='flex-container centerPanel'>
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
    */}

    <Row>
      <Col s={6} className="offset-m3 container flow-text">
        <h1 className="center-align"> <strong> Chance Phiniezy </strong></h1>
        <Row>
          <img src={personalPhoto} alt="personalPicture" className="responsive-img circle z-depth-5" />
        </Row>
    
        <h4 id="quoteHeading" className="center-align"> "Simplicity is the glory of expression."-Walt Whitman </h4>
      </Col>
    </Row>
    
    <Row >
      <Col s={6} className="box valign-wrapper z-depth-5">
        <a href="/bio">
          <Icon large className="icons black-text">mood</Icon>
        </a>
      </Col>
      <Col s={6} className="box valign-wrapper z-depth-5">
        <a href="/portfolio">
          <Icon large className="icons black-text">assignment</Icon> 
        </a>
      </Col>
    </Row>
  </div>
);

export default LandingPage;
