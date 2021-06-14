// Import statements comes here.
import React, { useState, useContext, useEffect } from "react"
import { Redirect } from "react-router-dom"
import "../../Styles/RestScreen.css"
import LanguageSelector from "../Shared/LanguageSelector"
import { useTranslation, withTranslation, Trans } from "react-i18next"
import { ClientContext } from "../../Contexts/ClientContext"
import { CartContext } from "../../Contexts/CartContext"
import companyLogo from "../../images/transdevLogo.png"
import amiKIOSK from "../../images/amiKIOSK.png"
import passCard from "../../images/passCard.png"

export const RestScreen = () => {
	const [client, setClient] = useContext(ClientContext)
	const [cart, setCart] = useContext(CartContext)
	const [state, setState] = useState({
		redirect: false,
		touchDisplay: "block",
		passCard: "none",
	})
	useEffect(() => {
		setClient(null)
		setCart([])
	}, [])

	const { t, i18n } = useTranslation()

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
		],
	}

	const readCard = async () => {
		setState({
			//redirect: true
			passCard: "block",
			touchDisplay: "none",
		})
		await waitingCard()
	}

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	const waitingCard = async () => {
		/*const response = await fetch('http://localhost:5000/api/ClientData');
        const data = await response.json();
        if(data.status != 200){
            setState({cancel: true})
            //setState({redirect: true})
            //setClient({clientData: dataSample});
                
        }else{
            setClient({clientData: data});
            setState({...state, redirect: true})
        }*/
		await sleep(3000)
		setClient({ clientData: sampleData })
		setState({ ...state, redirect: true })
	}

	if (state.redirect) {
		return <Redirect to='/main' />
	}

	return (
		<div className='container'>
			<div className='grid-item header'>
				<img alt='Logotipo da Empresa' src={companyLogo} width='400' />
				<img alt='Logotipo amiKIOSK' src={amiKIOSK} width='200' />
			</div>
			<div className='grid-item content'>
				<div
					id='touch'
					style={{ display: state.touchDisplay }}
					onClick={readCard}
				>
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
					<p
						className='touchToStart'
						id='touchToStart'
						onClick={readCard}
					>
						{/*Touch to Start*/}
						{t("RES_AddedImplicitProfiles")}
					</p>
				</div>
				<div id='pass' style={{ display: state.passCard }}>
					<img src={passCard} className='passCardImage' />
					<p className='passCard'>Apresente cartão</p>
				</div>
			</div>
			<div className='footer'>
				<LanguageSelector />
				<p className='direitos'>
					©2021 AMI-Tecnologias para Transportes. Todos os direitos
					reservados.
				</p>
			</div>
		</div>
	)
}
export default RestScreen
