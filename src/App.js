import logo from './logo.svg';
import './App.css';
import { CartProvider } from './Contexts/CartContext';
import { ClientProvider } from './Contexts/ClientContext';
import { WeatherProvider } from './Contexts/WeatherContext';
import React, {useContext, Suspense, useEffect } from 'react';
import RestScreen from './Components/Pages/RestScreen';
import Checkout from './Components/Pages/Checkout';
import Main from './Components/Pages/Main';
import Products from './Components/Pages/Products';
import testContainer from './Components/TestContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TestContainer from './Components/TestContainer';



function App() {
  return (
    <ClientProvider>
      <CartProvider>
        <WeatherProvider>
          <Suspense fallback="loading">
            <Router>
              <div className="App">
                  <Switch>
                  <Route path="/main">
                    <Main/>
                  </Route>
                  <Route path="/checkout">
                    <Checkout/>
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
                  <Route path="/">
                    <RestScreen/>
                  </Route>
                </Switch>
              </div>
            </Router>
          </Suspense>
        </WeatherProvider>
      </CartProvider>
    </ClientProvider>
  );
}

export default App;
