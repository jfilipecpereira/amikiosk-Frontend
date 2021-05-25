// Import statements comes here.
import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/Footer.css'
import amiKIOSKLogo from '../../images/amiKIOSKLogo.png'


export const Footer = (props) => {
    const [state, setState] = useState({
        redirect: false
    });


    if(state.redirect && props.Page ){
        return <Redirect to={props.Page} />
    }

    return(

        <div className="footerContent">
            <div className="goBack" onClick={() =>setState({redirect: true})}>
                <FontAwesomeIcon  size="8x" icon={faAngleLeft}/><span className="goBackText">{props.Text}</span>
            </div>
            <span className="copyright">©2021 AMI-Tecnologias para Transportes. Todos os direitos reservados.</span>
            <img src={amiKIOSKLogo} className="amiKIOSKLogo"/>
        </div>
    )

}

export default Footer;