import "./App.css"
import { CartProvider } from "./Contexts/CartContext"
import { ClientProvider } from "./Contexts/ClientContext"
import React, { Suspense, useEffect } from "react"
import RestScreen from "./Components/Pages/RestScreen"
import Checkout from "./Components/Pages/Checkout"
import Main from "./Components/Pages/Main"
import Products from "./Components/Pages/Products"
import Socket from "./Components/Socket"
import ChooseCompany from "./Components/Pages/ChooseCompany"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

function App() {
	useEffect(() => {
		var targetElement = document.querySelector("body")
		disableBodyScroll(targetElement)
	}, [])

	return (
		<ClientProvider>
			<CartProvider>
				<Suspense fallback='loading'>
					<Router>
						<div className='App'>
							<Socket />
							<Switch>
								<Route path='/main'>
									<Main />
								</Route>
								<Route path='/checkout'>
									<Checkout />
								</Route>
								<Route path='/products'>
									<Products />
								</Route>
								<Route path='/choose-company'>
									<ChooseCompany />
								</Route>
								<Route path='/'>
									<RestScreen />
								</Route>
							</Switch>
						</div>
					</Router>
				</Suspense>
			</CartProvider>
		</ClientProvider>
	)
}

export default App
