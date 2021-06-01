// Import statements comes here.
import React from "react"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import Content from "../Main/Content"

//import { useTranslation, withTranslation, Trans } from "react-i18next"

export const Main = () => {
	return (
		<div className='container'>
			<div className='grid-item header'>
				<Header />
			</div>
			<div className='grid-item content'>
				<Content />
			</div>
			<div className='grid-item footer'>
				<Footer Text='Sair' Page='/' />
			</div>
		</div>
	)
}

export default Main
