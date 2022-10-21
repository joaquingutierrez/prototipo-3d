import React, { useState, useContext } from "react";
import ItemCount from './ItemCount'
import './styles/ItemDetail.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ product }) => {

    const { name, image, description, stock, price } = product
    const [checkout, setCheckout] = useState(false)
    const { addItem, addDuplicateItem, isInCart } = useContext(CartContext)


    const onAdd = (contador) => {
        (isInCart(product.id) + 1) ? addDuplicateItem(isInCart(product.id), contador) : addItem(product, contador)
        setCheckout(true)
    }

    return (
        <>
            {name ? (
                <div className="containerItemDetail">
                    <img className="image" src={image} alt={name} />
                    <p className="description">{description}</p>
                    <div className="buy">
                        <h2>{name}</h2>
                        <h4>${price}</h4>
                        {checkout ? <Button variant="success"><Link to="/cart" className="style-link">Finalizar compra</Link></Button> : (<ItemCount stock={stock} initial={1} onAdd={onAdd} />)}
                    </div>
                </div>

            ) : (
                <h2 className="center">El producto solicidato no existe</h2>
            )}
        </>
    )
}

export default ItemDetail