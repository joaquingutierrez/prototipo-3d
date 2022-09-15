import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const add = () => contador < stock && setContador(contador + 1)
        
    

    const substract = () => (contador > initial) && setContador(contador - 1)

    return (
        <>
            <div className="card">
                <div className="text-center">
                    <h1>Item 1</h1>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <Button variant="dark" disabled={contador === initial} onClick={substract} className="">-</Button>
                    <h3 className="width-numer text-center">{contador}</h3>
                    <Button variant="dark" disabled={contador === stock} onClick={add} className="">+</Button>
                </div>
                <div className="text-center mb-2">
                    <Button variant="success" onClick={onAdd}>Agregar al Carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount