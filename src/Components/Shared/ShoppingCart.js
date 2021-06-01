import React, { useContext } from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../../Contexts/CartContext"
import { NavLink } from "react-router-dom"

import { useTranslation } from "react-i18next"

import "../../Styles/ShoppingCart.css"
import "../../images/shoppingCart.svg"
import emptyCartImage from "../../images/emptyCart.svg" // Tell webpack this JS file uses this image
import cartIcon from "../../images/shoppingCart.svg" // Tell webpack this JS file uses this image

const useStyles = makeStyles(() => ({
	drawerPaper: {
		width: 240,
		height: 600,
	},
}))

export default function ShoppingCart() {
	const { t, i18n } = useTranslation()

	const [cart, setCart] = useContext(CartContext)

	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)

	const classes = useStyles()
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}

	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((product) => product !== productToRemove))
	}

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role='presentation'
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className='cartContainer'>
				<div className='cartHeader'>
					Carrinho de Compras
					{cart.length > 0 ? (
						<>
							{" "}
							({cart.length}) <br />{" "}
							<span className='totalPrice'>{t("Total")}:</span>{" "}
							<span className='price'>
								{totalPrice.toFixed(2)} €{" "}
							</span>
						</>
					) : (
						<></>
					)}
					<br />
				</div>
				<div className='CardBody'>
					{cart.map((item, key) => (
						<div className='Item' key={key}>
							<div className='ItemInfo'>
								<p className='NomePasse'>{item.name}</p>
								<p className='DetalhePasse'>{t("Mes")}: Maio</p>
								<p className='DetalhePasse'>
									Total: {item.price}
								</p>
							</div>
							<div className='ItemDelete'>
								<FontAwesomeIcon
									onClick={() => removeFromCart(item)}
									icon={faTrash}
									size='3x'
								/>
							</div>
						</div>
					))}

					{cart.length === 0 ? (
						<div className='emptyCart'>
							<img
								src={emptyCartImage}
								className='imgEmptyCart'
							/>
							<br />
							<span className='emptyCartText'>
								Carrinho Vazio
							</span>
						</div>
					) : (
						<></>
					)}

					<div className='checkout'>
						{cart.length > 0 ? (
							<>
								<NavLink
									to='/checkout'
									style={{ width: "45%" }}
								>
									<Button
										variant='contained'
										className='checkoutButton'
									>
										Finalizar
									</Button>
								</NavLink>
								<Button
									variant='contained'
									className='exitButton'
									style={{ width: "45%" }}
									onClick={toggleDrawer(anchor, false)}
								>
									Sair
								</Button>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<div className='cartIcon'>
			<React.Fragment key={"bottom"}>
				<img
					src={cartIcon}
					width='130'
					onClick={toggleDrawer("bottom", true)}
				/>
				<span
					className='numberItemsinCart'
					onClick={toggleDrawer("bottom", true)}
				>
					{cart.length}
				</span>
				<SwipeableDrawer
					anchor={"bottom"}
					open={state["bottom"]}
					onClose={toggleDrawer("bottom", false)}
					onOpen={toggleDrawer("bottom", true)}
					swipeAreaWidth='500'
				>
					{list("bottom")}
				</SwipeableDrawer>
			</React.Fragment>
		</div>
	)
}
