// Import statements comes here.
import React, { useContext, useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import "../../Styles/Checkout.css"
import { useTranslation } from "react-i18next"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"
import { ClientContext } from "../../Contexts/ClientContext"

export const VATData = (props) => {
	const { t } = useTranslation()
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
							onChange={() => {}}
							value={clientData.clientData.nif}
						/>
						<span className='placeholder'>{t("RES_NumberTaxpayer")}</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("name")}>
					<label>
						<input
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.name}
						/>
						<span className='placeholder'>{t("RES_FullName")}</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("address")}>
					<label>
						<input
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.address}
						/>
						<span className='placeholder'>{t("RES_Address")}</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("postalC")}>
					<label>
						<input
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.postalC}
						/>
						<span className='placeholder'>{t("RES_PostalCode")}</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<br />
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
VATData.propTypes = {
	mainText: PropTypes.string.isRequired,
}

export default VATData
