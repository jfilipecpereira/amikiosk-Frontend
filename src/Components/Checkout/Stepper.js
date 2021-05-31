// Import statements comes here.
import React, {useContext, useState, Button } from 'react';
import '../../Styles/RestScreen.css'
import '../../Styles/Client.css'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'
import Content from '../Main/Content'

import { useTranslation, withTranslation, Trans } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import  { Redirect } from 'react-router-dom'
import VATData from './VATData';

export const Stepper = (props) => {

    const [step, setStep] = useState(1);
    const [goBack, setGoBack] = useState(false);

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () =>{
        setStep(step - 1);
    }


    const arrowActions = () => (
        <>
            <div className="prevStep" onClick={step > 1 ? prevStep : () => setGoBack(true) }>
                <FontAwesomeIcon  size="8x" icon={faAngleLeft}/><span className="goBackText">{step > 1 ? <>Anterior</> : <>Voltar</> }</span>
            </div>
            <div className="nextStep" onClick={nextStep}>
                <span className="goBackText">Seguinte</span><FontAwesomeIcon  size="8x" icon={faAngleRight}/>
            </div>
        </>
    )
    
    if(goBack)
        return <Redirect to="/main"/>

    switch (step) {
        case 1:
            return (
                <>
                    <VATData mainText="Dados de Faturação"/>
                    {arrowActions()}
                </>
            );
        case 2:
            return (
                <>
                    Teste2
                    {arrowActions()}
                </>
            );
        case 3:
            return (
                <>
                    Teste3
                    {arrowActions()}
                </>
            );
        case 4:
            return (
                <>
                    Teste4
                    {arrowActions()}
                </>
            );
        case 5:
            return (
                <>
                    Teste5
                    {arrowActions()}
                </>
            );
        case 6:
            return (
                <>
                    Teste6
                    {arrowActions()}
                </>
            );
        case 7:
            return (
                <>
                    Teste7
                    {arrowActions()}
                </>
            );
        case 8:
            return (
                <>
                    Teste8
                    {arrowActions()}
                </>
            );
        
        default:
            return <Redirect to="/client" />
        }

}

export default Stepper;