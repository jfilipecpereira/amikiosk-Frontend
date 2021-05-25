import React, { Component, useState } from 'react';
import LanguageSelector from '../Shared/LanguageSelector'
import ShoppingCart from '../Shared/ShoppingCart'
import companyLogo from '../../images/transdevLogo.png';

import '../../Styles/Header.css'
import '../../Styles/ShoppingCart.css'

export const Header = (props) => {

    return(
        <>
            <img src={companyLogo} width="400"/>
            <div className="rightHeader" style={{display:'flex'}}>
                <LanguageSelector/>
                <ShoppingCart/>
            </div>
        </>
    )
}

export default Header;
