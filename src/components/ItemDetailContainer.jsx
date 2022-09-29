import React from "react"
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import {productsList} from '../assets/productsList'
import Spinner from 'react-bootstrap/Spinner'
import './styles/ItemDetailContainer.css'
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
    
    const { id } = useParams()
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true)
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsList[id - 1])
            },2000)
        })
        .then(res => {
            setProduct(res)
            setLoading(false)
        })
    },[id])
    
    
    return (
        <div className="containerDetail">
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemDetail product={product}/>}
        </div>
    )

}

export default ItemDetailContainer