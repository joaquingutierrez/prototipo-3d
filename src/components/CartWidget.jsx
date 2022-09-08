import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="shoppingCart">
            <ShoppingCartRoundedIcon fontSize="large"/>
        </div>
    )
}

export default CartWidget