import React from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import {productsList} from '../assets/productsList'
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from "react";
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    
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
        <>
            <h3>{greeting}</h3>
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemList productsList={products} />}
            <ItemDetailContainer />
        </>
    )
}
export default ItemListContainer