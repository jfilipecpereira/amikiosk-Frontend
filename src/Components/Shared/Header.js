import React from "react"
import LanguageSelector from "../Shared/LanguageSelector"
import ShoppingCart from "../Shared/ShoppingCart"
import companyLogo from "../../images/transdevLogo.png"

import "../../Styles/Header.css"
import "../../Styles/ShoppingCart.css"

export const Header = () => {
	return (
		<>
			<img src={companyLogo} alt='Logotipo da empresa' width='400' />
			<div className='rightHeader' style={{ display: "flex" }}>
				<LanguageSelector />
				<ShoppingCart />
			</div>
		</>
	)
}

export default Header
