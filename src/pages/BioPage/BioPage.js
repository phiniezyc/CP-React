import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';
import headShot from './Chance.Headshot.jpg';
import './BioPage.css'

const BioPage = () => (
  <div className='container bioContent'>
    <div className='row'>
      <Col  s={7}>
        <Card 
          horizontal
          className='pictureDisplay'
          header={<CardTitle image={headShot}  />}
        >
          <div className='container flow-text'>
            <h5>Most Familiar:</h5>
            <ul>
              <li>Javascript, NodeJS, JQuery, Express</li>
              <li>React, Redux, Handlebars</li>
              <li>Git, Github, GitLab, CommandLine</li>
              <li>MongoDB, MySQL, Mongoose, Serialize, Firebase</li>
              <li>HTML, CSS, Bootstrap, Materialize, Semantic</li>
            </ul>
            <h5>Exposure:</h5>
            <ul>
              <li>Java</li>
              <li>Processing</li>
              <li>PHP</li>
              <br />
            </ul>
          </div>
        </Card>
      </Col>
      
      <div className='flow-text'>
        <br />
        <p>Hi, I am Chance. Welcome to my portfolio. You will find some of my projects.</p>
        
        <p>Also serving as a lawyer, and former health care policy staffer, I have been fortunate to live in great cities across the United States, but have settled in my forever home (and hometown), Atlanta, GA.</p>
        
        <p>A true ATLien, I am a long suffering fan of the Braves, Falcons, and Hawks. I am weirdly supersticious, so you may find me in the same gear on game days. I have other clothes, I promise.</p>
        
        <p>If I am not working or attending a sporting event, I am probably listening to music.</p>

      
      </div>
    </div>

  </div>
);

export default BioPage;