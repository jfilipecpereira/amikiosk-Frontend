// Import statements comes here.
import React, { useContext } from "react"
import PropTypes from "prop-types"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import card from "../../images/card.png"
//import { useTranslation, withTranslation, Trans } from "react-i18next"
import { ClientContext } from "../../Contexts/ClientContext"
import ReactCardFlip from "react-card-flip"

export const CardFlipping = (props) => {
	const [client] = useContext(ClientContext)
	return (
		<>
			<ReactCardFlip isFlipped={props.isFlipped} flipDirection='horizontal'>
				<div>
					<img src={card} className='cardImage' />
				</div>

				<div>
					<div className='cardsContainer cardImage'>
						{client.clientData.contractsLoaded.map((contract, index) => (
							<div
								className='miniCard'
								key={index}
								style={
									client.clientData.contractsLoaded.length < 3
										? { maxHeight: "250px", marginTop: "60px" }
										: {}
								}
							>
								<div className='miniCardContent'>
									<p className='tarifeName'>{contract.name}</p>
									<p>{contract.company}</p>
									<p>
										{" "}
										<span className='expirationDateText'>Validade:</span> {contract.dataEnd}
									</p>
									<p>
										<span className='expirationDateText'>Origem:</span> Carvalhinhos
									</p>
									<p style={{ margin: "0" }}>
										<span className='expirationDateText'>Destino:</span> Braga
									</p>
								</div>
							</div>
						))}
						{/*<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>Validade:</span> 31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>Origem:</span> Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>Destino:</span> Braga
								</p>
							</div>
						</div>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>Validade:</span> 31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>Origem:</span> Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>Destino:</span> Braga
								</p>
							</div>
						</div>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>Validade:</span> 31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>Origem:</span> Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>Destino:</span> Braga
								</p>
							</div>
						</div>*/}
					</div>
				</div>
			</ReactCardFlip>
		</>
	)
}

CardFlipping.propTypes = {
	isFlipped: PropTypes.bool.isRequired,
}

export default CardFlipping
