import logo from '../logo.svg';
import '../App.css';
import React, {useContext, Suspense, useEffect } from 'react';

import { CartProvider } from '../Contexts/CartContext';
import { ClientProvider } from '../Contexts/ClientContext';


import RestScreen from './Pages/RestScreen';
import Main from './Pages/Main';
import Products from './Pages/Products';
import Test from './Test'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function TestContainer() { 
    
    return (

        <>
            <ClientProvider>
                <CartProvider>
                    <Test/>
                </CartProvider>
            </ClientProvider>
        </>

  );
}

export default TestContainer;
