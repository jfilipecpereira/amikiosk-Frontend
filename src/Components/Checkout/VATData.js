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
	const [display, setDisplay] = useState({
		nif: false,
		name: false,
		address: false,
		postalC: false,
		invalidPostalC: false,
		invalidNIF: false,
	})
	const [disabled, setDisabled] = useState(false)
	const [layoutName, setlayoutName] = useState("main")
	const keyboard = useRef()

	useEffect(() => {
		setActiveInput("nif")
		keyboard.current.setInput(clientData.clientData.nif)
	}, [])

	useEffect(() => {
		Object.values(display).includes(true) ? props.canNext(false) : props.canNext(true)
	})

	useEffect(() => {
		//sync state and context when state is updated
		setClient(clientData)
		if (
			(clientData.clientData.postalC.length != 8 || !clientData.clientData.postalC.includes("-")) &&
			disabled != true
		) {
			setDisplay((prevState) => {
				return {
					...prevState,
					invalidPostalC: true,
				}
			})
		} else {
			setDisplay((prevState) => {
				return {
					...prevState,
					invalidPostalC: false,
				}
			})
		}
		if (clientData.clientData.nif.length != 9 || clientData.clientData.nif == 999999999) {
			setDisplay((prevState) => {
				return {
					...prevState,
					invalidNIF: true,
				}
			})
		} else {
			setDisplay((prevState) => {
				return {
					...prevState,
					invalidNIF: false,
				}
			})
		}

		//NIF 999 999 990
		if (clientData.clientData.nif == 999999990) {
			console.log("teste")
			setDisabled(true)
		} else {
			console.log("teste")
			setDisabled(false)
		}
	}, [clientData])

	useEffect(() => {
		if (disabled) {
			setClientData((prevState) => {
				return {
					...prevState,
					clientData: {
						...prevState.clientData,
						name: "Cliente Final",
						address: "",
						postalC: "",
						city: "",
					},
				}
			})
		}
	}, [disabled])

	const onChange = (input) => {
		//Validation for FullName field length
		if (activeInput == "name") {
			if (!validateLength(input, 40)) return
		}
		//Validation for FullName if state is disabled
		if (activeInput == "name") {
			if (disabled) return
		}
		//Validation for NIF field length
		if (activeInput == "address") {
			if (!validateLength(input, 50)) return
		}
		//Validation for City field length
		if (activeInput == "city") {
			if (!validateLength(input, 40)) return
		}
		//Validation for NIF field length
		if (activeInput == "nif") {
			if (!validateLength(input, 10)) return
		}

		//Validade 999 999 999
		if (activeInput == "nif") {
			//if (input == "999999999") return
		}

		//Validation for ZIP Code field length
		if (activeInput == "postalC") {
			if (!validateLength(input, 9)) return
			//Insert the - in ZIP Code
			if (input.length == 5 && clientData.clientData.postalC.length == 4) {
				input = input.substring(0, 4) + "-" + input.charAt(4)
				keyboard.current.setInput(input)
			}
		}

		//If all conditions are satisfied the client data are updated
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

	//validade the length of the input
	const validateLength = (inputValue, length) => {
		if (inputValue.length >= length) {
			keyboard.current.setInput(inputValue.substring(0, length - 1))
			return false
		}
		if (inputValue.length == 0) {
			setDisplay((prevState) => {
				return {
					...prevState,
					[activeInput]: true,
				}
			})
		} else {
			setDisplay((prevState) => {
				return {
					...prevState,
					[activeInput]: false,
				}
			})
		}
		return true
	}

	const onChangeSource = (inputName) => {
		setActiveInput(inputName)
		keyboard.current.setInput(clientData.clientData[inputName])
		console.log(inputName)
		if (inputName == "nif" || inputName == "postalC") {
			setlayoutName("numbersOnly")
		} else {
			setlayoutName("main")
		}
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
				<span className='alertInvalid' name='nif'>
					{display.nif ? "O campo NIF não pode estar vazio (Se não quiser NIF insira 999999990)" : null}
					{display.invalidNIF ? "Insira um NIF Válido" : null}
				</span>
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
				<span className='alertInvalid' name='name'>
					{display.name ? "O campo nome não pode estar vazio" : null}
				</span>
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("address")}>
					<label>
						<input
							disabled={disabled}
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.address}
						/>
						<span className='placeholder'>{t("RES_Address")}</span>
					</label>
				</div>
				<span className='alertInvalid' name='address'>
					{display.address ? "O campo Morada não pode estar vazio" : null}
				</span>
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("postalC")}>
					<label>
						<input
							disabled={disabled}
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.postalC}
						/>
						<span className='placeholder'>{t("RES_PostalCode")}</span>
					</label>
				</div>
				<span className='alertInvalid' name='postalC'>
					{display.postalC ? "O campo Código Postal não pode estar vazio" : null}
					{display.invalidPostalC ? "Insira um Código Postal Válido" : null}
				</span>
				<br />
				<br />
				<br />
				<div className='centered' onClick={() => onChangeSource("city")}>
					<label>
						<input
							disabled={disabled}
							type='text'
							className='textfield'
							onChange={() => {}}
							value={clientData.clientData.city}
						/>
						<span className='placeholder'>{t("RES_City")}</span>
					</label>
				</div>
				<br />
				<br />
				<br />
				<Keyboard
					keyboardRef={(r) => (keyboard.current = r)}
					onChange={onChange}
					disableCaretPositioning='true'
					layoutName={layoutName}
					layout={{
						main: [
							"1 2 3 4 5 6 7 8 9 0",
							"Q W E R T Y U I O P {backspace}",
							"A S D F G H J K L",
							"Z X C V B N M , . -",
							"{space}",
						],
						numbersOnly: ["1 2 3", "4 5 6", "7 8 9", "0 {backspace}"],
					}}
					display={{
						"{space}": "Espaço",
						"{backspace}": "⌫",
					}}
				/>
			</div>
		</>
	)
}
VATData.propTypes = {
	mainText: PropTypes.string.isRequired,
	canNext: PropTypes.fun,
}

export default VATData
