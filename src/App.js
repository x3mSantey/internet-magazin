import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Wares from './components/Wares/Wares';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Subscribe from './components/Subscribe/Subscribe';
import Page_product from './components/Page_product/Page_product';


function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div>
          <Route path="/wares" component={Wares} />
          <Route path="/main" component={Main} />
          <Route path="/product" component={Page_product} />
        </div>
        <Subscribe />
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App;
