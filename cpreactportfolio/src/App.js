import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import FooterPanel from './components/Footer/Footer';


const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/portfolio" component={GalleryPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
        <FooterPanel />

      </div>
    </BrowserRouter>
  </div>
);

export default App;
