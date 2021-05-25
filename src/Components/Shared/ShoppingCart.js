import React, {useContext, Suspense } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faShoppingCart, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext} from '../../Contexts/CartContext'
import { NavLink, Route } from 'react-router-dom'

import { useTranslation } from "react-i18next";

import '../../Styles/ShoppingCart.css'
import '../../images/shoppingCart.svg'
import emptyCartImage from '../../images/emptyCart.png'; // Tell webpack this JS file uses this image
import cartIcon from '../../images/shoppingCart.svg'; // Tell webpack this JS file uses this image

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
});


export default function ShoppingCart() {

  const { t, i18n } = useTranslation()

  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);


  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  }

 

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className="cartHeader">
            <div className="CartPresentation">
               {t('carrinho.titulo')}
              { cart.length > 0 ? " ("+ cart.length +")" : <></>}
            </div>
            <div className="CartClose">
                <FontAwesomeIcon icon={faTimes} onClick={toggleDrawer(anchor, false)}/>
            </div>
        </div>
        <div className="CardBody">
          {
              cart.map(item=>(
                <div className="Item">
                  <div className="ItemInfo">
                      <p className="NomePasse">{item.name}</p>
                      <p className="DetalhePasse">{t('Mes')}: Maio</p>
                      <p className="DetalhePasse">Total: {item.price}</p>
                  </div>
                  <div className="ItemDelete">
                      <FontAwesomeIcon onClick={() => removeFromCart(item)} icon={faTrash} size="3x" />
                  </div>
                  {/*<div className="price">{item.price}</div>*/}
                </div>
                
              ))
            }
            
            { cart.length === 0 ? 
              <div className="emptyCart"><img src={emptyCartImage} className="imgEmptyCart"/></div>
            : <></>}

            <div className="Checkout">
              { cart.length > 0 ? 
                  <>
                    <div className="totalPrice">
                      <div><span className="title">{t('carrinho.precoTotal')}:</span> <span className="value">{totalPrice.toFixed(2)} €</span></div>
                    </div>
                    <NavLink to="/checkout">
                      <Button variant="contained" className="CheckoutButton">
                        {t('carrinho.checkoutButton')}
                      </Button>
                    </NavLink> 
                  </>
                  : <></>}
                
            </div>
        </div>
      
    </div>
  );

  return (
    <div class="cartIcon">
        <React.Fragment key={'bottom'}>
            <img src={cartIcon} width="130" onClick={toggleDrawer('bottom', true)}/>
            <span className="numberItemsinCart">{cart.length}</span>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
                swipeAreaWidth="300"
            >
                {list('bottom')}
            </SwipeableDrawer>
        </React.Fragment>


    </div>
  );
}