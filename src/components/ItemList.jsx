import React from "react";
import Item from "./Item"
import './styles/ItemList.css'

const ItemList = ({productsList}) => {

    return (
        <div className="contenedorItems">
            {productsList.length > 0 ? productsList.map((prod) => <Item key={prod.id} product={prod}/>) : <h1>No se encontraron productos</h1>}
        </div>
    )
}

export default ItemList