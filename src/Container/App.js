import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Components/Header/index.component';
import Footer from '../Components/Footer/index.component';
import { RoutePath } from '../Route/index.route';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <RoutePath />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
