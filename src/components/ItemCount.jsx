import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import './styles/ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const add = () => contador < stock && setContador(contador + 1)

    const substract = () => (contador > initial) && setContador(contador - 1)


    return (
        <>
            {(stock > 0) ? (
                <>
                    <div className="d-flex justify-content-center mb-2">
                        <Button variant="dark" disabled={contador === initial} onClick={substract}>-</Button>
                        <h3 className="width-numer text-center">{contador}</h3>
                        <Button variant="dark" disabled={contador === stock} onClick={add}>+</Button>
                    </div>
                    <div className="text-center mb-2">
                        <Button variant="success" onClick={() => onAdd(contador)}>Agregar al Carrito</Button>
                    </div>
                </>
            ) : (
                <h3 className='red'>No hay más stock</h3>
            )
            }
        </>
    )
}

export default ItemCount