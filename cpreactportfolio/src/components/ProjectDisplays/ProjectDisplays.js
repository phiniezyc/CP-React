import React from 'react';
import { Card, CardTitle, Button } from 'react-materialize';
import './ProjectDisplays.css'
import feedTheBumpPhoto from './img/feedTheBump.jpg';
import bamazon from './img/bamazon.jpg';
import mongoScraper from './img/mongoScraper.png';
import dateNight from './img/dateNight.png';
import nbaMatch from './img/nbaMatch.png';




const ProjectDisplays = () => (
  <div className='container'>
    <div className='portfolioCard'>
      <Card
        header={<CardTitle reveal image={feedTheBumpPhoto} waves='light' />}
        title="Feed the Bump"
        reveal={<p>Feed the Bump is an online nutrition diary for pregnant women that combines existing research on prenatal nutrition with Nutritionix Database to provide helpful, accurate information for women seeking healthy pregnancies. </p> 
        }
      >
        <div>
          <Button className='indigo button' waves='light' node='a' href='https://agile-everglades-73956.herokuapp.com/'> Demo </Button>
        </div>
        
        <div>
          <Button className='blue button' waves='light' node='a' href='https://github.com/phiniezyc/FeedtheBump'> Code </Button>
        </div>
      </Card>
    </div>
    
    <div className='portfolioCard'>
      <Card
        header={<CardTitle reveal image={dateNight} waves='light' />}
        title="Date Night"
        reveal={<p>An app focused on creating an evening of fun and food based on your wants or cravings flavor profile. The app then gives you a curated movie and a list of dinner ideas (which also includes a link to a full recipe) based on your flavor profile to top off your night! </p> 
        }
      >
        
        <div>
          <Button className='blue button' waves='light' node='a' href='https://github.com/phiniezyc/Date-Night-App'> Code </Button>
        </div>
      </Card>
    </div>


    <div className='portfolioCard'>
      <Card
        header={<CardTitle reveal image={nbaMatch} waves='light' />}
        title="NBA Match"
        reveal={<p>A compatibility-based NBA star match (friend-finder) application. Takes in results from user surveys, then compares their answers with those from other users. The app displays the name and picture of the user with the best overall match. </p> 
        }
      >
        <div>
          <Button className='indigo button' waves='light' node='a' href='https://serene-gorge-24927.herokuapp.com/'> Demo </Button>
        </div>
        <div>
          <Button className='blue button ' waves='light' node='a' href='https://github.com/phiniezyc/FriendFinder'> Code </Button>
        </div>
      </Card>
    </div>

    
    <div className='portfolioCard'>
      <Card
        header={<CardTitle reveal image={mongoScraper} waves='light' />}
        title="mongoScraper"
        reveal={<p>Web application that scrapes sports websites and allows the user to add a note to the scraped material in mongoDB </p> 
        }
      >
        <div>
          <Button className='indigo button' waves='light' node='a' href='https://immense-basin-87641.herokuapp.com/'> Demo </Button>
        </div>
        <div>
          <Button className='blue button' waves='light' node='a' href='https://github.com/phiniezyc/mongoScraper'> Code </Button>
        </div>
      </Card>
    </div>


    <div className='portfolioCard'>
      <Card
        header={<CardTitle reveal image={bamazon} waves='light' />}
        title="Bamazon"
        reveal={<p>Amazon-like storefront command line app that uses MySQL to take orders and deplete stock from the store inventory. </p> 
        }
      >
        <div>
          <Button className='indigo button' waves='light' node='a' href='https://www.youtube.com/watch?v=f-ajKMf1IHY&feature=youtu.be'> Demo </Button>
        </div>
        <div>
          <Button className='blue button' waves='light' node='a' href='https://github.com/phiniezyc/bamazon'> Code </Button>
        </div>
      </Card>
    </div>
  
    
  </div>
);

export default ProjectDisplays;