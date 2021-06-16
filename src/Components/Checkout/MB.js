// Import statements comes here.
import React from "react"
import PropTypes from "prop-types"
import "../../Styles/Checkout.css"
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

MB.propTypes = {
	mainText: PropTypes.string.isRequired,
}

export default MB
