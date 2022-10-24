import React from "react";
import './styles/CartItem.css'


const CartItem = ({product, index, totalItem, removeItem, orderId}) => {


    return (
        <div className={(index % 2 === 0) ? "cartItem" : "cartItem background-gray"}>
            <h4 className="name fontSizeItems">{product.quantity} x {product.name}</h4>
            <h4 className="price fontSizeItems">${product.price}</h4>
            <h4 className="total fontSizeItems">${totalItem}</h4>
            {!orderId && <h4 className="delete fontSizeItems"><span onClick={() => removeItem(product.id)}>x</span></h4>}
        </div>
    )

}

export default CartItem