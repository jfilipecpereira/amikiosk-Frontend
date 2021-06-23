import "./App.css"
import { CartProvider } from "./Contexts/CartContext"
import { ClientProvider } from "./Contexts/ClientContext"
import React, { Suspense } from "react"
import RestScreen from "./Components/Pages/RestScreen"
import Checkout from "./Components/Pages/Checkout"
import Main from "./Components/Pages/Main"
import Products from "./Components/Pages/Products"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
	return (
		<ClientProvider>
			<CartProvider>
				<Suspense fallback='loading'>
					<Router>
						<div className='App'>
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
