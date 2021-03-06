// Import statements comes here.
import React, { useState, useContext, useEffect } from "react"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import LanguageSelector from "../Shared/LanguageSelector"
import { useTranslation } from "react-i18next"
import { ClientContext } from "../../Contexts/ClientContext"
import { CartContext } from "../../Contexts/CartContext"
import companyLogo from "../../images/transdevLogo.png"
import amiKIOSK from "../../images/amiKIOSK.png"


export const RestScreen = () => {
	const [, setClient] = useContext(ClientContext)
	const [, setCart] = useContext(CartContext)
	const [redirect, setRedirect] = useState(false)
	useEffect(() => {
		setClient(null)
		setCart([])
	}, [])

	const { t } = useTranslation()

	const readCard = async () => {
		setRedirect(true)
	}

	return (
		<>
			{redirect == true ? <Redirect to='/choose-company' /> : null}
			<div className='container'>
				<div className='grid-item header'>
					<img alt='Logotipo da Empresa' src={companyLogo} width='400' />
					<img alt='Logotipo amiKIOSK' src={amiKIOSK} width='200' />
				</div>
				<div className='grid-item content'>
					<div id='touch' onClick={readCard}>
						<svg
							className='blob'
							width='600'
							height='472'
							viewBox='0 0 600 472'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M580.307 143.192C612.944 206.37 603.092 257.221 564.913 318.087C527.349 378.954 461.46 449.837 347.539 467.172C233.618 484.893 71.0495 449.066 19.3232 383.192C-32.4031 317.317 27.3285 221.394 108.613 140.881C189.897 60.3671 293.35 -4.73719 382.639 0.270832C471.928 5.27885 547.671 80.3991 580.307 143.192Z'
								fill='#FF7E7E'
							/>
						</svg>
						<p className='touchToStart' id='touchToStart' onClick={() => readCard}>
							{/*Touch to Start*/}
							{t("RES_touchToStart")}
						</p>
					</div>
				</div>
				<div className='footer'>
					<LanguageSelector />
					<p className='direitos'>{t("RES_copyright")}</p>
				</div>
			</div>
		</>
	)
}
export default RestScreen
