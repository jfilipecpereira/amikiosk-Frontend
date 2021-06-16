// Import statements comes here.
import React, { useState, useContext } from "react"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import CardFlipping from "./Card"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { ClientContext } from "../../Contexts/ClientContext"
import { Redirect } from "react-router"

export const Content = () => {
	const { t } = useTranslation()

	const [isFlipped, setisFlipped] = useState(false)
	const [redirectProducts, setredirectProducts] = useState(false)
	const [client] = useContext(ClientContext)

	const handleFlip = () => {
		setisFlipped(!isFlipped)
	}

	console.log(client)
	return (
		<>
			{redirectProducts ? <Redirect to='/products' /> : null}
			<div className='welcomeText'>{t("RES_Welcome")}, Matilde</div>
			<div className='cardImageContainer'>
				<CardFlipping isFlipped={isFlipped} setisFlipped={setisFlipped} />
			</div>
			<div className='buttonContainer' style={{ marginTop: "80px" }}>
				<div className='ActionButton' onClick={handleFlip}>
					<FontAwesomeIcon icon={faEye} size='5x' className='ActionButton icon' />
					<span className='buttonText'>{isFlipped ? t("RES_dllsprajna_00046") : t("RES_Contracts")}</span>
				</div>

				<div className='ActionButton' style={{ marginTop: "80px" }} onClick={() => setredirectProducts(true)}>
					<FontAwesomeIcon icon={faPlus} size='5x' className='ActionButton icon' />
					<span className='buttonText'>{t("RES_dllsprajna_00046")}</span>
				</div>
			</div>
		</>
	)
}

export default Content
