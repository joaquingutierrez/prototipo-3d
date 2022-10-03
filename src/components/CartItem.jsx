import React from "react";
import './styles/CartItem.css'


const CartItem = ({product, index, totalItem, removeItem}) => {


    return (
        <div className={(index % 2 === 0) ? "cartItem" : "cartItem background-gray"}>
            <h4 className="name">{product.quantity} x {product.name}</h4>
            <h4 className="price">${product.price}</h4>
            <h4 className="total">${totalItem(product)}</h4>
            <h4 className="delete"><span onClick={() => removeItem(product.id)}>x</span></h4>
        </div>
    )

}

export default CartItem