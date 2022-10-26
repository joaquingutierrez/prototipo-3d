import React, { useContext, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import './styles/Cart.css'
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import swal from "sweetalert";
import CartOrderTable from './CartOrderTable'
import BuyerForm from "./BuyerForm";




const Cart = () => {

    //show es un state para el modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //finish se utiliza para saber cuando la compra a sido exitosa, saleID guarda el estado del ID de la compra
    const [finish, setFinish] = useState(false)
    const [loading, setLoading] = useState(false)
    const [saleID, setSaleID] = useState('')

    const { cart, removeItem, clear, totalPrice, user } = useContext(CartContext)

    const stockUpdate = (cart, userData) => {
        let list = []
        cart.map((product) => {
            //Traigo la cantidad de stock disponible en el momento de la compra para saber si hay suficiente
            return getDoc(doc(db, 'products', product.id))
                .then((data) => {
                    if (data.data().stock - product.quantity >= 0) {
                        updateDoc(doc(db, 'products', product.id), {
                            stock: data.data().stock - product.quantity
                        })
                        list = [...list, product]
                        list.length === cart.length && buy(cart, userData)
                    } else {
                        list = [...list, '\n' + product.name]
                        swal('No hay stock suficiente de: ' + list)
                    }
                })
        })
    }

    const buyControl = (cart, userData, emailConfirmation) => {
        if (user.name) {
            setLoading(true)
            stockUpdate(cart, user)
        } else {
            if ((userData.name) && (userData.phone) && (userData.email)) {
                if (emailConfirmation) {
                    setLoading(true)
                    handleClose()
                    //list es un array para mostrar los productos que no se encuentran en stock
                    stockUpdate(cart, userData)
                } else {
                    swal('Error', 'Los emails no coinciden, vuelva a intentarlo', 'warning')
                }
            } else {
                swal('Error', 'Por favor complete todos los campos', 'warning')
            }

        }
    }

    const buy = (cart, userData) => {
        addDoc(collection(db, 'sales'), {
            user: userData,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(cart)
        })
            .then((data) => {
                setFinish(true)
                setSaleID(data.id)
                user.name && addSaleIdtoUser(data.id)
                clear()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const addSaleIdtoUser = (saleId) => {
        const userRef = doc(db, 'users', user.uid)
        user.buys = [...user.buys,
            saleId
        ]
        setDoc(userRef, { buys: user.buys }, { merge: true })
    }

    return (
        <>
            {loading ? (<Spinner className="center" animation="border" role="status" />) : (
                (cart.length) ? (
                    <>
                        <CartOrderTable cart={cart} removeItem={removeItem} clear={clear} />
                        <Button className="button-finish" variant="success" onClick={user.name ? () => buyControl(cart, user, null) : handleShow}>Comprar</Button>
                        <BuyerForm show={show} handleClose={handleClose} buy={buyControl} cart={cart} />
                    </>
                ) : (finish ? <h2 className="center">Gracias por su compra, el ID es {saleID}</h2> :
                    <h2 className="noProductsTitle">No hay productos agregados click <Link to="/" className="noProductsTitleLink">aquí</Link> para volver al inico</h2>
                ))
            }
        </>
    )
}

export default Cart

