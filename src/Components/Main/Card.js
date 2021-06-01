// Import statements comes here.
import React, { useContext } from "react"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import card from "../../images/card.png"
//import { useTranslation, withTranslation, Trans } from "react-i18next"
//import { ClientContext } from "../../Contexts/ClientContext"
import ReactCardFlip from "react-card-flip"

export const CardFlipping = (props) => {
	return (
		<>
			<ReactCardFlip
				isFlipped={props.isFlipped}
				flipDirection='horizontal'
			>
				<div>
					<img src={card} className='cardImage' />
				</div>

				<div>
					<div className='cardsContainer cardImage'>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>
										Validade:
									</span>{" "}
									31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>
										Origem:
									</span>{" "}
									Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>
										Destino:
									</span>{" "}
									Braga
								</p>
							</div>
						</div>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>
										Validade:
									</span>{" "}
									31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>
										Origem:
									</span>{" "}
									Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>
										Destino:
									</span>{" "}
									Braga
								</p>
							</div>
						</div>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>
										Validade:
									</span>{" "}
									31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>
										Origem:
									</span>{" "}
									Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>
										Destino:
									</span>{" "}
									Braga
								</p>
							</div>
						</div>
						<div className='miniCard'>
							<div className='miniCardContent'>
								<p className='tarifeName'>Passe 4-18</p>
								<p>Transdev Interior SA</p>
								<p>
									{" "}
									<span className='expirationDateText'>
										Validade:
									</span>{" "}
									31/05/2021
								</p>
								<p>
									<span className='expirationDateText'>
										Origem:
									</span>{" "}
									Carvalhinhos
								</p>
								<p style={{ margin: "0" }}>
									<span className='expirationDateText'>
										Destino:
									</span>{" "}
									Braga
								</p>
							</div>
						</div>
					</div>
				</div>
			</ReactCardFlip>
		</>
	)
}

export default CardFlipping
