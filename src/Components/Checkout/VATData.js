// Import statements comes here.
import React, {useContext, useState, useRef, useEffect } from 'react';
import '../../Styles/Checkout.css'
import ReactDOM from "react-dom";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import { ClientContext } from '../../Contexts/ClientContext'


export const VATData = (props) => {
    const [client, setClient] = useContext(ClientContext);  
    const [clientData, setClientData] = useState(client);  
    const [layout, setLayout] = useState("default");
    const [activeInput, setActiveInput] = useState();
    const keyboard = useRef();

    useEffect(() => {
        setActiveInput('nif');
        keyboard.current.setInput(clientData.clientData.nif);
    }, []);

    useEffect(() => {
        setClient(clientData);
    }, [clientData]);


    const onChange = input => {
        setClientData((prevState) => {
            return {
              ...prevState,
              clientData:{
                ...prevState.clientData,
                [activeInput]: input
              }
              
            };
          });
      };

    const onChangeSource = inputName => {
        setActiveInput(inputName);
        keyboard.current.setInput(clientData.clientData[inputName]);
    }

    return(
        <>
           <div className="welcomeText">{props.mainText}</div>
            <div className="cardImageContainer checkoutContainer">
                <div onClick={() => onChangeSource('nif')}><TextField id="nif" label="Contribuinte" variant="outlined" value={clientData.clientData.nif} error/></div>
                <div onClick={() => onChangeSource('name')}><TextField id="name" label="Nome" variant="outlined" value={clientData.clientData.name} error /></div>
                <div onClick={() => onChangeSource('address')}><TextField id="address" label="Morada" variant="outlined" value={clientData.clientData.address} error /></div>
                <div onClick={() => onChangeSource('postalC')}><TextField id="postalC" label="Código Postal" variant="outlined" value={clientData.clientData.postalC}  error /></div>

                <Keyboard 
                    keyboardRef={r => (keyboard.current = r)}
                    onChange={onChange}
                    disableCaretPositioning="true"
                    
                />

            </div>
        </>
    )

}

export default VATData;