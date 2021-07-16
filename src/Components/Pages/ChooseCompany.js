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
import passCard from "../../images/passCard.png"

import { useTranslation } from "react-i18next"

export const ChooseCompany = () => {
	const { t } = useTranslation()
	const [client] = useContext(ClientContext)
	const [, setClient] = useContext(ClientContext)
	const [state, setState] = useState({
		redirect: false,
		company: "flex",
		passCard: "none",
	})
	useEffect(() => {
		setClient(null)
	}, [])

	const sampleData = {
		name: "Matilde Rosendo Pereira",
		number: 23113,
		cardNumber: 1955788548,
		address: "Urb Quinta das Varzeas, Lt 3, 2ºDrt.",
		city: "",
		postalC: "6200",
		status: "200",
		nif: "234881232",
		lastTransation: 1621932671,
		contractsToReload: [
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "01/06/2021",
				dateEnd: "30/06/2021",
				origin: "Terminal 1",
				destination: "Terminal 1",
				trips: 0,
				lastSale: null,
				price: 29.2,
				cash: 0,
			},
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "01/05/2021",
				dateEnd: "31/05/2021",
				origin: "Terminal 1",
				destination: "Terminal 1",
				trips: 0,
				lastSale: null,
				price: 29.2,
				cash: 0,
			},
		],
		contractsLoaded: [
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "28/04/2021",
				dateEnd: "01/05/2021",
				dateSale: "28/04/2021",
			},
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "28/04/2021",
				dateEnd: "01/05/2021",
				dateSale: "28/04/2021",
			},
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "28/04/2021",
				dateEnd: "01/05/2021",
				dateSale: "28/04/2021",
			},
			{
				id: 69,
				name: "4_18 MAIOR Esc25",
				company: "Transdev Interior,  S.A.",
				companyId: 9,
				dateInit: "28/04/2021",
				dateEnd: "01/05/2021",
				dateSale: "28/04/2021",
			},
		],
	}

	const readCard = async () => {
		setState({
			//redirect: true
			passCard: "block",
			company: "none",
		})
		await waitingCard()
	}

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	const waitingCard = async () => {
		/*try {
			const response = await fetch("https://localhost:5001/api/ClientData")
			const data = await response.json()
			if (data.status != 200) {
				setState({ cancel: true })
				setState({
					passCard: "none",
					company: "flex",
				})
			} else {
				setClient({ clientData: data })
				setState({ ...state, redirect: true })
			}
		} catch (err) {
			console.error(err)
		}*/
		await sleep(1000)
		await setClient({ clientData: sampleData })
		setState({ ...state, redirect: true })
	}

	if (state.redirect) {
		return <Redirect to='/main' />
	}

	return (
		<>
			<div className='container'>
				<div className='grid-item header'>
					<img alt='Logotipo da Empresa' src={companyLogo} width='400' />
					<img alt='Logotipo amiKIOSK' src={amiKIOSK} width='200' />
				</div>
				<div className='grid-item content'>
					<div className='welcomeText'>{t("RES_ChooseCompany")}:</div>
					<div className='chooseComapanyContainer' style={{ display: state.company }}>
						<img src={companyLogo} width='500' style={{ margin: "50px" }} onClick={readCard} />
						<img src={companyLogo} width='500' style={{ margin: "50px" }} onClick={readCard} />
					</div>
					<div id='pass' style={{ display: state.passCard }}>
						<img src={passCard} className='passCardImage' />
						<p className='passCard'>{t("RES_presentCard")}</p>
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

export default ChooseCompany
