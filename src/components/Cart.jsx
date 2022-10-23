import React, { useContext, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import './styles/Cart.css'
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import swal from "sweetalert";
import CartOrderTable from './CartOrderTable'
import BuyerForm from "./BuyerForm";




const Cart = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [finish, setFinish] = useState(false)
    const [loading, setLoading] = useState(false)
    const [saleID, setSaleID] = useState('')

    const { cart, removeItem, clear, totalPrice } = useContext(CartContext)

    const stockUpdate = (cart, user, emailConfirmation) => {
        if ((user.name) && (user.phone) && (user.email)) {
            if (emailConfirmation) {
                setLoading(true)
                handleClose()
                //list es un array para mostrar los productos que no se encuentran en stock
                let list = []
                cart.map((product) => {
                    //Traigo la cantidad de stock disponible en el momento de la compra
                    return getDoc(doc(db, 'products', product.id))
                        .then((data) => {
                            if (data.data().stock - product.quantity >= 0) {
                                updateDoc(doc(db, 'products', product.id), {
                                    stock: data.data().stock - product.quantity
                                })
                                buy(cart, user)
                            } else {
                                list = [...list, '\n' + product.name]
                                swal('No hay stock suficiente de: ' + list)
                            }
                        })
                })
            } else {
                swal('Error', 'Los emails no coinciden, vuelva a intentarlo', 'warning')
            }
        } else {
            swal('Error', 'Por favor complete todos los campos', 'warning')
        }
    }

    const buy = (cart, user) => {
        addDoc(collection(db, 'sales'), {
            user: user,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(cart)
        })
            .then((data) => {
                setFinish(true)
                setSaleID(data.id)
                clear()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {!loading ? ((cart.length) ? (
                <>
                    <CartOrderTable cart={cart} removeItem={removeItem} clear={clear} />
                    <Button className="button-finish" variant="success" onClick={handleShow}>Comprar</Button>
                    <BuyerForm show={show} handleClose={handleClose} buy={stockUpdate} cart={cart} />
                </>
            ) : (finish ? <h2 className="center">Gracias por su compra, el ID es {saleID}</h2> :
                <h2 className="noProductsTitle">No hay productos agregados click <Link to="/" className="noProductsTitleLink">aquí</Link> para volver al inico</h2>
            )) : (<Spinner className="center" animation="border" role="status" />)}
        </>
    )
}

export default Cart