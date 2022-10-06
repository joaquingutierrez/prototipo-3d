import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem"
import './styles/Cart.css'
import { Link } from "react-router-dom";

const totalItem = (product) => {
    return product.quantity * product.price
}


const totalPrice = (cart) => {
    let total = 0
    cart.map((product) =>
        total += totalItem(product)
    )
    return total
}


const Cart = () => {

    const { cart, removeItem, clear } = useContext(CartContext)


    return (
        <>
            {(cart.length) ? (
                <>
                    <div className="titles">
                        <h3 className="deleteTitle">Eliminar</h3>
                        <h3 className="nameTitle">Cantidad x Producto</h3>
                        <h3 className="priceTitle">Precio por unidad</h3>
                        <h3 className="total-priceTitle">Precio total</h3>
                    </div>
                    <div className="cartContainer">
                        {cart.map((product, index) => <CartItem key={product.id} totalItem={totalItem} product={product} index={index} removeItem={removeItem} />)}
                    </div>
                    <div className="total-buttonContainer">
                        <Button className="button-clear" variant="success" onClick={clear}>Eliminar todo</Button>
                        <h4 className="total">Total: ${totalPrice(cart)}</h4>
                    </div>
                </>
            )
                : (
                    <h2 className="noProductsTitle">No hay productos agregados click <Link to="/" className="noProductsTitleLink">aquí</Link> para volver al inico</h2>
                )}
        </>
    )
}

export default Cart

