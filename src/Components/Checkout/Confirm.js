// Import statements comes here.
import React, { useContext } from "react"
import { ClientContext } from "../../Contexts/ClientContext"
import PropTypes from "prop-types"
import "../../Styles/Checkout.css"
import "../../Styles/Checkout.css"

export const Confirm = (props) => {
	const [client] = useContext(ClientContext)
	return (
		<>
			<div className='welcomeText'>{props.mainText}</div>
			<div className='cardImageContainer'>
				<p>Nome: {client.clientData.name}</p>
				<p>Morada: {client.clientData.address}</p>
				<p>NIF: {client.clientData.nif}</p>
				<p>Código Postal: {client.clientData.postalC}</p>
			</div>
		</>
	)
}

Confirm.propTypes = {
	mainText: PropTypes.string.isRequired,
}

export default Confirm
