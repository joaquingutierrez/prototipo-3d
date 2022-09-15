import React from "react";
import Item from "./Item"
import {productsList} from '../assets/productsList'
import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import './ItemList.css'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true)
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsList)
            },2000)
        })
        .then(res => {
            setProducts(res)
            setLoading(false)
        })
    },[])

    return (
        <div className="contenedorItems">
            {loading ? <Spinner animation="border" role="status" /> : products.map((prod) => <Item key={prod.id} product={prod}/>)}
        </div>
    )
}

export default ItemList