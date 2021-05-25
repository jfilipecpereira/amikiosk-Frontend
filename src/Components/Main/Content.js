// Import statements comes here.
import React, {useContext } from 'react';
import '../../Styles/RestScreen.css'
import '../../Styles/Client.css'
import card from '../../images/card.png'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ClientContext } from '../../Contexts/ClientContext'

export const Content = (props) => {
    const [client, setClient] = useContext(ClientContext);
    return(
        <>
            <div className="welcomeText">Bem Vindo(a), Matilde</div>
            <div className="cardImageContainer">
                <img src={card} className="cardImage"/>
            </div>
            <div className="buttonContainer" style={{marginTop:'80px'}}>
                <div className="ActionButton">
                    <FontAwesomeIcon icon={faEye} size="5x" className="ActionButton icon"/>
                    <span className="buttonText">Consultar Dados</span>
                </div>

                <div className="ActionButton" style={{marginTop:'80px'}}>
                    <FontAwesomeIcon icon={faPlus} size="5x" className="ActionButton icon"/>
                    <span className="buttonText">Recarregar Título</span>
                </div>
            </div>
        </>
    )

}

export default Content;