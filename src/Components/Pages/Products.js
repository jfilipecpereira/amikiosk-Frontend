// Import statements comes here.
import React, { useContext, useState } from "react"
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

	const [openSuccessMessage, setOpenSuccessMessage] = useState(false)
	const [openErrorMessage, setOpenErrorMessage] = useState(false)

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
	return (
		<div className='container'>
			<div className='grid-item header'>
				<Header />
			</div>
			<div className='grid-item content'>
				<div className='welcomeText'>{t("RES_Products")}</div>
				<div className='products'>
					{client.clientData.contractsToReload.map((contract, index) => (
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
					<div className='product'>
						<p id='teste1'>Produto 1</p>
						<p>preco x </p>
						<p>preco empresa y </p>
					</div>
					<div className='product'>
						<p>Produto 2</p>
						<p>preco x </p>
						<p>preco empresa y </p>
					</div>
					<div className='product'>
						<p>Produto 3</p>
						<p>preco x </p>
						<p>preco empresa y </p>
					</div>
					<div className='product'>
						<p>Produto 3</p>
						<p>preco x </p>
						<p>preco empresa y </p>
					</div>
				</div>
			</div>
			<div className='grid-item footer'>
				<Footer Text='Voltar' Page='/main' />
			</div>
			<Snackbar open={openSuccessMessage} autoHideDuration={3000} onClose={handleClose} className='snackBar'>
				<Alert onClose={handleClose} severity='success' className='snackBar'>
					Tarifa Adicionada ao Carrinho
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

export default Products
