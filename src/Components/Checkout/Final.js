// Import statements comes here.
import React, { useEffect, useContext, useState } from "react"
import PropTypes from "prop-types"
import { CartContext } from "../../Contexts/CartContext"
import { ClientContext } from "../../Contexts/ClientContext"
import "../../Styles/Checkout.css"
import "../../Styles/Checkout.css"

export const Final = (props) => {
	const [cart] = useContext(CartContext)
	const [client] = useContext(ClientContext)
	const [text, setText] = useState("A fazer pedido")

	useEffect(async () => {
		const response = await fetch("http://localhost:5000/api/ClientData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
			},
			body: JSON.stringify({
				idTarifa: cart[0].id,
				cardNumber: client.clientData.cardNumber,
				lastTransaction: client.clientData.lastTransation,
			}),
		})
		if (response.status == 200) {
			console.log("sucesso")
			setText("Passe Carregado com sucesso")
		}
	}, [])

	return (
		<>
			<div className='welcomeText'>{props.mainText}</div>
			{text}
		</>
	)
}

Final.propTypes = {
	mainText: PropTypes.string.isRequired,
}

export default Final
