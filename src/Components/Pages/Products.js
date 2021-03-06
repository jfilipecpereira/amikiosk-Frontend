// Import statements comes here.
import React, { useContext, useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import { useTranslation } from "react-i18next"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"

//import { useTranslation, withTranslation, Trans } from "react-i18next"

import { ClientContext } from "../../Contexts/ClientContext"
import { CartContext } from "../../Contexts/CartContext"

export const Products = () => {
	const { t } = useTranslation()

	const [client] = useContext(ClientContext)
	const [cart, setCart] = useContext(CartContext)
	const [redirect, setRedirect] = useState(false)
	const [openSuccessMessage, setOpenSuccessMessage] = useState(false)
	const [openErrorMessage, setOpenErrorMessage] = useState(false)

	useEffect(() => {
		if (!client.clientData) {
			setRedirect(true)
		}
	}, [])

	const addToCart = (product) => {
		let exist = cart.find((item) => item === product)
		if (exist) {
			setOpenErrorMessage(true)
			console.log("existe")
		} else {
			setCart((currentState) => [...currentState, product])
			setOpenErrorMessage(false)
			setOpenSuccessMessage(true)
		}
	}

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}
		setOpenSuccessMessage(false)
		setOpenErrorMessage(false)
	}

	if (redirect) {
		return <Redirect to='/' />
	} else {
		return (
			<div className='container'>
				<div className='grid-item header'>
					<Header />
				</div>
				<div className='grid-item content'>
					<div className='welcomeText'>{t("RES_Products")}</div>
					<div className='products'>
						{client.clientData?.contractsToReload.map((contract, index) => (
							// eslint-disable-next-line react/jsx-key
							<div className='product' key={index} onClick={() => addToCart(contract)}>
								<p className='contractName'>{contract.name}</p>
								<p className='validatyInterval'>
									{contract.dateInit} - {contract.dateEnd}
								</p>
								<p>
									{t("RES_SubTotal")}: <span className='valueText'>{contract.price.toFixed(2)}</span>
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='grid-item footer'>
					<Footer Text={t("RES_Previous")} Page='/main' />
				</div>
				<Snackbar open={openSuccessMessage} autoHideDuration={3000} onClose={handleClose} className='snackBar'>
					<Alert onClose={handleClose} severity='success' className='snackBar'>
						{t("RES_addedToCart")}
					</Alert>
				</Snackbar>
				<Snackbar open={openErrorMessage} autoHideDuration={3000} onClose={handleClose} className='snackBar'>
					<Alert onClose={handleClose} severity='warning' className='snackBar'>
						{t("RES_ContractAlreadyExist")}
					</Alert>
				</Snackbar>
			</div>
		)
	}
}

export default Products
