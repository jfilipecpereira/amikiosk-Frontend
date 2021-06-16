import React, { useState } from "react"
import PropTypes from "prop-types"

export const CartContext = React.createContext()

export const CartProvider = (props) => {
	const [cart, setCart] = useState([])
	return <CartContext.Provider value={[cart, setCart]}>{props.children}</CartContext.Provider>
}
CartProvider.propTypes = {
	children: PropTypes.object.isRequired,
}
