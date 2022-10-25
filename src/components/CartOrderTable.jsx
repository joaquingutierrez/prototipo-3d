import React, {useContext} from "react";
import CartItem from "./CartItem"
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import './styles/Cart.css'

const CartOrderTable = ( { cart, removeItem, clear, orderId } ) => {

    const { totalItem, totalPrice } = useContext(CartContext)

    //se verifica si orderId existe para saber si se renderiza el carro o la orden de compra
    return (
        <>
            <div className="titles">
                {!orderId && <h3 className="deleteTitle fontSizeTitle">Eliminar</h3>}
                <h3 className="nameTitle fontSizeTitle">Cantidad x Producto</h3>
                <h3 className="priceTitle fontSizeTitle">Precio por unidad</h3>
                <h3 className="total-priceTitle fontSizeTitle">Precio total</h3>
            </div>
            <div className="cartContainer">
                {cart.map((product, index) => <CartItem key={product.id} totalItem={totalItem(product)} product={product} index={index} removeItem={removeItem} orderId={orderId} />)}
            </div>
            <div className="total-buttonContainer">
                {!orderId &&<Button className="button-clear" variant="success" onClick={clear}>Eliminar todo</Button>}
                <h4 className="total fontSizeTitle">Total: ${totalPrice(cart)}</h4>
            </div>
        </>
    )
}

export default CartOrderTable