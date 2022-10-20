import React from "react";
import ItemList from "./ItemList";
import Spinner from 'react-bootstrap/Spinner'
import { useState, useEffect } from "react";
import './styles/ItemListContainer.css'
import { useParams } from "react-router-dom";
import { db } from '../firebase/firebase'
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    
    const {id} = useParams()
    const {tag} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])

    useEffect(() => {

        const q = id && query(collection(db, "products"), where("category", "==", id.charAt(0).toUpperCase() + id.slice(1)))

        const searchQ = tag ? query(collection(db, "products"), where("tags", "array-contains", tag)) : collection(db, 'products')

        setLoading(true)

        getDocs(q || searchQ)
        .then((data)=>{
            const lista = data.docs.map((doc)=>{
                return {
                    ...doc.data(), 
                    id: doc.id
                }
            })
            setProducts(lista)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id, tag])


    
    return (
        <>
            <h3>{greeting}</h3>
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemList productsList={products} />}
        </>
    )
}
export default ItemListContainer