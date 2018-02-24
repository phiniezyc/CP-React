import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route  path='/gallery' component={GalleryPage}/>
              <Route exact path='/' component={LandingPage}/>
            </Switch>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
