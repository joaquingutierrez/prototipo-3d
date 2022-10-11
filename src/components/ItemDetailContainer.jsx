import React from "react"
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import './styles/ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/firebase'




const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    useEffect(() => {

        const q = doc(db, 'products', id)
        
        getDoc(q)
            .then((data) => {
                setProduct(
                    {
                        ...data.data(),
                        id: data.id
                    }
                )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [id])


    return (
        <div className="containerDetail">
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemDetail product={product} />}
        </div>
    )

}

export default ItemDetailContainer