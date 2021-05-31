// Import statements comes here.
import React, {useContext } from 'react';
import '../../Styles/RestScreen.css'
import '../../Styles/Checkout.css'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'

import Stepper from '../Checkout/Stepper'

import { useTranslation, withTranslation, Trans } from 'react-i18next';

export const Checkout = (props) => {
    return(
        <div className="container">
            <div className="grid-item header">
                <Header/>
            </div>
            <div className="grid-item content">
                <Stepper/>
            </div>
            <div className="grid-item footer">
                <Footer/>
            </div>
        </div>
    )

}

export default Checkout;