import React from "react";
import Item from "./Item"
import './styles/ItemList.css'

const ItemList = ({productsList}) => {

    return (
        <div className="contenedorItems">
            {productsList.map((prod) => <Item key={prod.id} product={prod}/>)}
        </div>
    )
}

export default ItemList