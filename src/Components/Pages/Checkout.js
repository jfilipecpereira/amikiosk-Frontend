// Import statements comes here.
import React, { useContext, useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import "../../Styles/Checkout.css"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"

import Stepper from "../Checkout/Stepper"

import { ClientContext } from "../../Contexts/ClientContext"
import { CartContext } from "../../Contexts/CartContext"

export const Checkout = () => {
	const [client] = useContext(ClientContext)
	const [redirect, setRedirect] = useState(false)
	const [cart] = useContext(CartContext)

	useEffect(() => {
		if (!client.clientData) {
			setRedirect(true)
		}
		if (!cart) {
			setRedirect(true)
		}
	}, [])

	if (redirect) {
		return <Redirect to='/' />
	} else {
		return (
			<div className='container'>
				<div className='grid-item header'>
					<Header />
				</div>
				<div className='grid-item content'>
					<Stepper />
				</div>
				<div className='grid-item footer'>
					<Footer Page='teste' />
				</div>
			</div>
		)
	}
}

export default Checkout
