import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const onAdd= () => {
    console.log("Agregado al carrito");
}

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h3>{greeting}</h3>
            <ItemList />
            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer