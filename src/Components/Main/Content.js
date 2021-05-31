// Import statements comes here.
import React, {useContext, useState } from 'react';
import '../../Styles/RestScreen.css'
import '../../Styles/Client.css'
import CardFlipping from './Card'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ClientContext } from '../../Contexts/ClientContext'
import { Redirect } from 'react-router';

export const Content = (props) => {
    const [client, setClient] = useContext(ClientContext);
    const [isFlipped, setisFlipped] = useState(false);
    const [redirectProducts, setredirectProducts] = useState(false);
    

    const handleFlip = () => {
        setisFlipped(!isFlipped);
    }

    

    return(
        <>
            {redirectProducts ?  <Redirect to='/products' />  : null}
            <div className="welcomeText">Bem Vindo(a), Matilde</div>
            <div className="cardImageContainer">
                <CardFlipping isFlipped={isFlipped} setisFlipped={setisFlipped}/>
            </div>
            <div className="buttonContainer" style={{marginTop:'80px'}}>
                <div className="ActionButton" onClick={handleFlip}>
                    <FontAwesomeIcon icon={faEye} size="5x" className="ActionButton icon"/>
                    <span  className="buttonText">{isFlipped ? "Ver Cartão" : "Consultar Dados" }</span>
                </div>

                <div className="ActionButton" style={{marginTop:'80px'}} onClick={() => setredirectProducts(true)}>
                    <FontAwesomeIcon icon={faPlus} size="5x" className="ActionButton icon"/>
                    <span className="buttonText">Recarregar Título</span>
                </div>
            </div>
        </>
    )

}

export default Content;