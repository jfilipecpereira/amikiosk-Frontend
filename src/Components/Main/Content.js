// Import statements comes here.
import React, {useContext, useState } from 'react';
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
    const [flipped, setFlipped] = useState(false);
    

    const [age, setAge] = useState(19)
    const handleClick = () => setFlipped(!flipped)

    const handleFlip = () => {
        setFlipped(!flipped);

    }

    return(
        <>
            <div className="welcomeText">Bem Vindo(a), Matilde {flipped.toString()}</div>
            <div className={"cardImageContainer card-container" + (flipped ? " flipped" : "")}>
                <img src={card} className="cardImage" />
            </div>
            <div className="buttonContainer" style={{marginTop:'80px'}}>
                <div className="ActionButton">
                    <FontAwesomeIcon icon={faEye} size="5x" className="ActionButton icon"/>
                    <span  className="buttonText" onClick={handleFlip}>Consultar Dados</span>
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