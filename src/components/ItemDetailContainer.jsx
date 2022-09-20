import React from "react"
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import {productsList} from '../assets/productsList'
import Spinner from 'react-bootstrap/Spinner'
import './ItemDetailContainer.css'

const onAdd= () => {
    console.log("Agregado al carrito");
}


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true)
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsList[6])
            },2000)
        })
        .then(res => {
            setProduct(res)
            setLoading(false)
        })
    },[])
    
    
    return (
        <div className="containerDetail">
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemDetail product={product} onAdd={onAdd} />}
        </div>
    )

}

export default ItemDetailContainer