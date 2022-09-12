import React from "react";
import ItemCount from "./ItemCount";

const onAdd= () => {
    console.log("Agregado al carrito");
}

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h3>{greeting}</h3>
            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer