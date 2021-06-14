// Import statements comes here.
import React, { useContext, useState, useRef, useEffect } from "react"
import "../../Styles/Checkout.css"
import { useTranslation, withTranslation, Trans } from "react-i18next"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"
import { ClientContext } from "../../Contexts/ClientContext"

export const VATData = (props) => {
	const [client, setClient] = useContext(ClientContext)
	const [clientData, setClientData] = useState(client)
	const [activeInput, setActiveInput] = useState()
	const keyboard = useRef()

	useEffect(() => {
		setActiveInput("nif")
		keyboard.current.setInput(clientData.clientData.nif)
	}, [])

	useEffect(() => {
		setClient(clientData)
	}, [clientData])

	const onChange = (input) => {
		setClientData((prevState) => {
			return {
				...prevState,
				clientData: {
					...prevState.clientData,
					[activeInput]: input,
				},
			}
		})
	}

	const onChangeSource = (inputName) => {
		setActiveInput(inputName)
		keyboard.current.setInput(clientData.clientData[inputName])
	}

	return (
		<>
			<div className='welcomeText'>{props.mainText}</div>
			<div className='cardImageContainer checkoutContainer'>
				<div className='centered' onClick={() => onChangeSource("nif")}>
					<label>
						<input
							type='text'
							className='textfield'
							value={clientData.clientData.nif}
						/>
						<span className='placeholder'>Contribuinte</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div
					className='centered'
					onClick={() => onChangeSource("name")}
				>
					<label>
						<input
							type='text'
							className='textfield'
							value={clientData.clientData.name}
						/>
						<span className='placeholder'>Nome</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div
					className='centered'
					onClick={() => onChangeSource("address")}
				>
					<label>
						<input
							type='text'
							className='textfield'
							value={clientData.clientData.address}
						/>
						<span className='placeholder'>Morada</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div
					className='centered'
					onClick={() => onChangeSource("postalC")}
				>
					<label>
						<input
							type='text'
							className='textfield'
							value={clientData.clientData.postalC}
						/>
						<span className='placeholder'>Código Postal</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				{/*<div onClick={() => onChangeSource("nif")}>
					<TextField
						id='nif'
						label='Contribuinte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
						variant='outlined'
						value={clientData.clientData.nif}
						error
					/>
				</div>
				<div onClick={() => onChangeSource("name")}>
					<TextField
						id='name'
						label='Nome&nbsp;&nbsp;&nbsp;'
						variant='outlined'
						value={clientData.clientData.name}
						error
					/>
				</div>
				<div onClick={() => onChangeSource("address")}>
					<TextField
						id='address'
						label='Morada&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
						variant='outlined'
						value={clientData.clientData.address}
						error
					/>
				</div>
				<div onClick={() => onChangeSource("postalC")}>
					<TextField
						id='postalC'
						label='Código Postal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
						variant='outlined'
						value={clientData.clientData.postalC}
						error
					/>
				</div>*/}
				<Keyboard
					keyboardRef={(r) => (keyboard.current = r)}
					onChange={onChange}
					disableCaretPositioning='true'
					layoutName='ip'
					layout={{
						ip: [
							"1 2 3 4 5 6 7 8 9 0",
							"Q W E R T Y U I O P {backspace}",
							"A S D F G H J K L",
							"Z X C V B N M , . -",
							"{space}",
						],
					}}
					display={{
						"{space}": " ",
						"{backspace}": "⌫",
					}}
				/>
			</div>
		</>
	)
}

export default VATData
