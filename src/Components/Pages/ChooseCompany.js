// Import statements comes here.
import React, { useEffect, useContext, useState } from "react"
import { ClientContext } from "../../Contexts/ClientContext"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import LanguageSelector from "../Shared/LanguageSelector"
import companyLogo from "../../images/transdevLogo.png"
import amiKIOSK from "../../images/amiKIOSK.png"

import { useTranslation } from "react-i18next"

export const ChooseCompany = () => {
	const { t } = useTranslation()
	const [client] = useContext(ClientContext)
	const [redirect, setRedirect] = useState(false)

	return (
		<>
			<div className='container'>
				<div className='grid-item header'>
					<img alt='Logotipo da Empresa' src={companyLogo} width='400' />
					<img alt='Logotipo amiKIOSK' src={amiKIOSK} width='200' />
				</div>
				<div className='grid-item content'>
					<div className='welcomeText'>Por favor, escolha a sua empresa:</div>
					<div className='chooseComapanyContainer'>
						<img src={companyLogo} width='500' style={{margin:'50px'}}/>
						<img src={companyLogo} width='500' style={{margin:'50px'}}/>
						<img src={companyLogo} width='500' style={{margin:'50px'}}/>
                        <img src={companyLogo} width='500' style={{margin:'50px'}}/>
					</div>
				</div>
				<div className='footer'>
					<LanguageSelector />
					<p className='direitos'>©2021 AMI-Tecnologias para Transportes. Todos os direitos reservados.</p>
				</div>
			</div>
		</>
	)
}

export default ChooseCompany
