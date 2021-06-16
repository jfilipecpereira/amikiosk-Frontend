import React, { useState } from "react"
import PropTypes from "prop-types"

export const ClientContext = React.createContext()

export const ClientProvider = (props) => {
	const [client, setClient] = useState([])
	return <ClientContext.Provider value={[client, setClient]}>{props.children}</ClientContext.Provider>
}
ClientProvider.propTypes = {
	children: PropTypes.object.isRequired,
}
