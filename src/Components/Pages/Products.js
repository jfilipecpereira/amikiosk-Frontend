// Import statements comes here.
import React, {useContext, useState } from 'react';
import '../../Styles/RestScreen.css'
import '../../Styles/Client.css'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'

import { useTranslation, withTranslation, Trans } from 'react-i18next';

import { ClientContext } from '../../Contexts/ClientContext'
import { CartContext } from '../../Contexts/CartContext';

export const Products = (props) => {

    const [client, setClient] = useContext(ClientContext);
    const [cart, setCart] = useContext(CartContext);

    const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
    const [openErrorMessage, setOpenErrorMessage] = useState(false);
    
    const addToCart = (product) => {
        console.log('hello');
        let exist = cart.find(
          (item) => item === product
        );
        if(exist){
            setOpenErrorMessage(true);
            console.log('existe');
        }else{
          const newProduct = { name: product.name, price: product.price };
          setCart(currentState => [...currentState, product]);
          setOpenErrorMessage(false);
          setOpenSuccessMessage(true);
          console.log('n existe');
        }

    }

    return(
        <div className="container">
            <div className="grid-item header">
                <Header/>
            </div>
            <div className="grid-item content">
                <div className="welcomeText">Escolha o seu produto</div>
                <div className="products">

                    {client.clientData.contractsToReload.map((contract, key) =>(
                        <div className="product" onClick={() => addToCart(contract)}>
                            <p className="contractName">{ contract.name }</p>
                            <p className="validatyInterval">{ contract.dateInit } - { contract.dateEnd }</p>
                            <p>Valor: <span className="valueText">{ contract.price.toFixed(2) }</span></p>
                        </div> 
                    ))}
                    <div className="product">
                        <p>Produto 1</p>
                        <p>preco x </p>
                        <p>preco empresa y </p>
                    </div>
                    <div className="product">
                        <p>Produto 2</p>
                        <p>preco x </p>
                        <p>preco empresa y </p>
                    </div>
                    <div className="product">
                        <p>Produto 3</p>
                        <p>preco x </p>
                        <p>preco empresa y </p>
                    </div>
                    <div className="product">
                        <p>Produto 3</p>
                        <p>preco x </p>
                        <p>preco empresa y </p>
                    </div>
                    
                </div>
            </div>
            <div className="grid-item footer">
                <Footer Text="Voltar" Page="/main"/>
            </div>
        </div>
    )

}

export default Products;