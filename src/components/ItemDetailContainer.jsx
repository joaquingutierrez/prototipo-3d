import React, {useContext} from "react"
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import './styles/ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/firebase'
import { CartContext } from "../context/CartContext";




const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])

    const { cart, stockLocalControl } = useContext(CartContext)

    useEffect(() => {

        const q = doc(db, 'products', id)
        
        getDoc(q)
            .then((data) => {       
                setProduct(
                    {
                        ...data.data(),
                        id: data.id,
                        stock: stockLocalControl(cart, data.data(), data.id) >= 0 ? stockLocalControl(cart, data.data(), data.id) : data.data().stock
                    }
                    )
                })
                .finally(()=>{
                    setLoading(false)
            })
    }, [id, cart, product, stockLocalControl])


    return (
        <div className="containerDetail">
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemDetail product={product} id={id} />}
        </div>
    )

}

export default ItemDetailContainer