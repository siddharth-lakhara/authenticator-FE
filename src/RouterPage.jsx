import React from 'react';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

import './routerPage.css';

const RouterPage = () => (
  <div className="App-main">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default RouterPage;
