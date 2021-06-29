// Import statements comes here.
import React, { useEffect, useContext, useState } from "react"
import { ClientContext } from "../../Contexts/ClientContext"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import Content from "../Main/Content"
import { useTranslation } from "react-i18next"

export const Main = () => {
	const { t } = useTranslation()
	const [client] = useContext(ClientContext)
	const [redirect, setRedirect] = useState(false)

	useEffect(() => {
		if (!client.clientData) {
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
					<Content />
				</div>
				<div className='grid-item footer'>
					<Footer Text={t("RES_Sair")} Page='/' />
				</div>
			</div>
		)
	}
}

export default Main
