import React from 'react';
import './App.css';

// Componenti
import Navbar from './Components/Fixed_Elements/navBar';
import Footer from './Components/Fixed_Elements/footer';
import Homepage from './Components/Homepage/homepage';
import AboutMe from './Components/AboutMe/AboutMe';
import SearchPage from './Components/SearchPage/SearchPage';
import CityPage from './Components/CityPage/CityPage';

//Pagine di errori
import CityNotFound from './Components/ErrorPage/cityNotFound';
import UnknowError from './Components/ErrorPage/unknowError';

// Context per il passaggio di Dati
import {DataProvider} from './Components/dataContext'

import {BrowserRouter, Switch, Route} from 'react-router-dom' //Componenti necessari di React Router

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch> 
              <Route exact path='/' component={Homepage} />
              <Route exact path='/aboutme' component={AboutMe}/>
              <Route exact path='/search' component={SearchPage}/>
              <Route exact path='/city' component={CityPage}/>
              <Route exact path='/citynotfound' component={CityNotFound}/>
              <Route exact path='/error' component={UnknowError}/>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
