import React, { useContext } from "react"
import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'
import './styles/ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from '../firebase/firebase'
import { CartContext } from "../context/CartContext";
import swal from "sweetalert";




const ItemDetailContainer = () => {

    //id del producto
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState([true])
    const [wished, setWished] = useState(false)

    const { cart, stockLocalControl, user } = useContext(CartContext)

    useEffect(() => {

        const q = doc(db, 'products', id)

        getDoc(q)
            .then((data) => {
                data.data() ? (
                    setProduct(
                        {
                            ...data.data(),
                            id: data.id,
                            //se revisa si al momento de volver a agregar al carrito un mismo producto, hay stock suficiente
                            stock: stockLocalControl(cart, data.data(), data.id) >= 0 ? stockLocalControl(cart, data.data(), data.id) : data.data().stock
                        }
                    )
                ) : (
                    setProduct({})
                )

            })
            .finally(() => {
                setLoading(false)
            })
    }, [id, cart, stockLocalControl])

    //este useEffect se utiliza para comprobar si el item ya se encuentra en la lista de deseados del usuario
    useEffect(() => {
        user.wishList.some((item) => item.id === id) && setWished(true)
    }, [wished, id, user.wishList])


    const addToWishList = (name) => {
        if (user.name) {
            const userRef = doc(db, 'users', user.uid)
            user.wishList = [...user.wishList, {
                id,
                name
            }]
            setDoc(userRef, { wishList: user.wishList }, { merge: true })
            setWished(true)
        } else {
            swal('Error', 'Debes iniciar sesión para agregar a favoritos', 'warning')
        }
    }


    return (
        <div className="containerDetail">
            {loading ? <div className="center"><Spinner animation="border" role="status" /></div> : <ItemDetail product={product} addToWishList={addToWishList} wished={wished} />}
        </div>
    )

}

export default ItemDetailContainer