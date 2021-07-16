// Import statements comes here.
import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import "../../Styles/Footer.css"
import amiKIOSKLogo from "../../images/amiKIOSKLogo.png"
import { useTranslation } from "react-i18next"

export const Footer = (props) => {
	const { t } = useTranslation()

	const [state, setState] = useState({
		redirect: false,
	})

	if (state.redirect && props.Page) {
		return <Redirect to={props.Page} />
	}

	return (
		<div className='footerContent'>
			{props.Text != undefined ? (
				<div className='goBack' onClick={() => setState({ redirect: true })}>
					<FontAwesomeIcon size='8x' icon={faAngleLeft} />
					<span className='goBackText'>{props.Text}</span>
				</div>
			) : (
				<div className='goBack'> </div>
			)}
			<span className='copyright'>{t("RES_copyright")}</span>
			<img src={amiKIOSKLogo} className='amiKIOSKLogo' />
		</div>
	)
}

Footer.propTypes = {
	Page: PropTypes.string.isRequired,
	Text: PropTypes.any,
}

export default Footer
