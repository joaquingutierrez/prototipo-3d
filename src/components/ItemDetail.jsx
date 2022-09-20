import React from "react";
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product, onAdd }) => {
    const { id, name, image, description, category, stock, price } = product


    return (
        <div className="containerItemDetail">
            <img className="image" src={image} alt={name} />
            <p className="description">{description}</p>
            <div className="buy">
                <h2>{name}</h2>
                <h4>${price}</h4>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail