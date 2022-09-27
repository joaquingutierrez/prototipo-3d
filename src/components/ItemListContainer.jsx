import React from "react";
import ItemList from "./ItemList";
import {productsList} from '../assets/productsList'
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from "react";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    
    const {id} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        setLoading(true)
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productsList.filter((item) => item.category.toUpperCase() === id.toUpperCase()) : productsList)
            },2000)
        })
        .then(res => {
            setProducts(res)
            setLoading(false)
        })
    },[id])
    
    return (
        <>
            <h3>{greeting}</h3>
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemList productsList={products} />}
        </>
    )
}
export default ItemListContainer