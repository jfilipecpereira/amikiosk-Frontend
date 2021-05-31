import logo from '../logo.svg';
import '../App.css';
import React, {useContext, Suspense, useEffect } from 'react';


import { ClientContext } from '../Contexts/ClientContext'
import { CartContext } from '../Contexts/CartContext';

import RestScreen from './Pages/RestScreen';
import Main from './Pages/Main';
import Products from './Pages/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const Test = ({ componentToPassDown }) => { 
    const [client, setClient] = useContext(ClientContext);
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        (async () => {
            await setClient({clientData: sampleData});
        })()
    }, []);

    const sampleData = {
        "name": "Matilde Rosendo Pereira",
        "number": 23113,
        "cardNumber": 1955788548,
        "address": "Urb Quinta das Varzeas, Lt 3, 2ºDrt.",
        "city": "",
        "postalC": "6200",
        "status": "200",
        "lastTransation": 1621932671,
        "contractsToReload": [
            {
                "id": 69,
                "name": "4_18 MAIOR Esc25",
                "company": "Transdev Interior,  S.A.",
                "companyId": 9,
                "dateInit": "01/06/2021",
                "dateEnd": "30/06/2021",
                "origin": "Terminal 1",
                "destination": "Terminal 1",
                "trips": 0,
                "lastSale": null,
                "price": 29.2,
                "cash": 0
            },
            {
                "id": 69,
                "name": "4_18 MAIOR Esc25",
                "company": "Transdev Interior,  S.A.",
                "companyId": 9,
                "dateInit": "01/05/2021",
                "dateEnd": "31/05/2021",
                "origin": "Terminal 1",
                "destination": "Terminal 1",
                "trips": 0,
                "lastSale": null,
                "price": 29.2,
                "cash": 0
            }
        ],
        "contractsLoaded": [
            {
                "id": 69,
                "name": "4_18 MAIOR Esc25",
                "company": "Transdev Interior,  S.A.",
                "companyId": 9,
                "dateInit": "28/04/2021",
                "dateEnd": "01/05/2021",
                "dateSale": "28/04/2021"
            }
        ]
    }

    if(client.length <= 0){
        return <></>;
    }
  return (

    <>
        <Products/>
    </>

  );
  }

export default Test;
