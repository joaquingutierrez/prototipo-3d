import React, { useContext } from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './styles/CartWidget.css'
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const {cart, quantityProducts} = useContext(CartContext)
    const cartLength = quantityProducts(cart)
    return (
        <div className="shoppingCart">
            <ShoppingCartRoundedIcon fontSize="large"/>
            {(cartLength>0) && (<div className="numerItemsContainer"><p className="numerItems">{cartLength}</p></div>)}
        </div>
    )
}

export default CartWidget