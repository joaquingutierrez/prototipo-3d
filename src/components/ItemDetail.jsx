import React, { useState } from "react";
import ItemCount from './ItemCount'
import './styles/ItemDetail.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const ItemDetail = ({ product }) => {

    
    const { name, image, description, stock, price } = product
    const [checkout, setCheckout] = useState(false)
    
    const onAdd= (contador) => {
        console.log("Agregado al carrito: ", contador, 'items');
        setCheckout(true)
    }

    return (
        <div className="containerItemDetail">
                <img className="image" src={image} alt={name} />
            <p className="description">{description}</p>
            <div className="buy">
                <h2>{name}</h2>
                <h4>${price}</h4>
                {checkout ? <Button variant="success"><Link to="/cart" className="style-link">Finalizar compra</Link></Button> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail