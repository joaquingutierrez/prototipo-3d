import React, { useContext, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem"
import './styles/Cart.css'
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import BuyerForm from "./BuyerForm";
import { db } from "../firebase/firebase";
import swal from "sweetalert";




const totalItem = (product) => {
    return product.quantity * product.price
}


const totalPrice = (cart) => {
    let total = 0
    cart.map((product) =>
        total += totalItem(product)
    )
    return total
}



const Cart = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [finish, setFinish] = useState(false)
    const [loading, setLoading] = useState(false)
    const [saleID, setSaleID] = useState('')

    const { cart, removeItem, clear } = useContext(CartContext)

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
                setLoading(false)
                setSaleID(data.id)
                clear()
            })
    }

    return (
        <>
            { !loading ? ((cart.length) ? (
                <>
                    <div className="titles">
                        <h3 className="deleteTitle">Eliminar</h3>
                        <h3 className="nameTitle">Cantidad x Producto</h3>
                        <h3 className="priceTitle">Precio por unidad</h3>
                        <h3 className="total-priceTitle">Precio total</h3>
                    </div>
                    <div className="cartContainer">
                        {cart.map((product, index) => <CartItem key={product.id} totalItem={totalItem} product={product} index={index} removeItem={removeItem} />)}
                    </div>
                    <div className="total-buttonContainer">
                        <Button className="button-clear" variant="success" onClick={clear}>Eliminar todo</Button>
                        <h4 className="total">Total: ${totalPrice(cart)}</h4>
                    </div>
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

