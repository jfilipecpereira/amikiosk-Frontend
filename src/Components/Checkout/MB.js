// Import statements comes here.
import React, { useContext, useState, useEffect } from "react"
import "../../Styles/Checkout.css"
import { useTranslation, withTranslation, Trans } from "react-i18next"
import "../../Styles/Checkout.css"
import mbIcon from "../../images/mb.svg"

export const MB = (props) => {
	return (
		<>
			<div className='welcomeText'>{props.mainText}</div>
			<div className='cardImageContainer'>
				<img src={mbIcon} alt='Multimabco' width='650' />
			</div>
		</>
	)
}

export default MB
