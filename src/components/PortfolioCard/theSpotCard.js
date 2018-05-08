import React from 'react';
import {Card, CardTitle, Button} from 'react-materialize';

import theSpotImage from './img/theSpot.png';

{/* for some reason import doesn't work w/ other files. Hard coded in this file in projectDisplay because can't import this componenent there. Revisit */}

const theSpotCard = () => (
  <div className='portfolioCard'>
    <Card
      header={<CardTitle reveal image={theSpotImage} waves='light' />}
      title="The Spots"
      reveal={
        <div>
          <p>The Spots is an application that allows users to sign up to add restaurants/bars to review, similar to Yelp. Once a Spot is added, other users can comment on the Spot and add their own thoughts. </p> 
          <ul>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Handlebars</li>
            <li>Materialize</li>
            <li>Passport</li>
            <li>Connect-Flash</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        }
    >
      <div>
        <Button className='indigo button' waves='light' node='a' href='https://fathomless-mesa-78444.herokuapp.com/'> Demo </Button>
      </div>
        
      <div>
        <Button className='blue button' waves='light' node='a' href='https://github.com/phiniezyc/The_Spot'> Code </Button>
      </div>
    </Card>
  </div>
);

export default theSpotCard;