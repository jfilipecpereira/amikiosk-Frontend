import React, { useState } from "react"

export const WeatherContext = React.createContext()

export const WeatherProvider = (props) => {
	const [weather, setWeather] = useState({
		temp: "estadoInicial",
		icon: "",
		seconds: 0,
	})
	return (
		<WeatherContext.Provider value={[weather, setWeather]}>
			{props.children}
		</WeatherContext.Provider>
	)
}
