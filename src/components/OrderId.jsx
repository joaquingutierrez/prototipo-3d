import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import './styles/Cart.css'
import { Spinner } from "react-bootstrap";
import CartOrderTable from "./CartOrderTable";


const OrderId = () => {

    const { orderId } = useParams()
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "sales", orderId)
        getDoc(docRef)
            .then((data) => {
                const list = data.data()?.items.map((prod) => {
                    return {
                        ...prod
                    }
                })
                setProducts(list)
                setTotal(data.data()?.total)
                const myDate = new Date(data.data()?.date.seconds * 1000);
                setDate(myDate.toLocaleString());
            })
            .finally(() => {
                setLoading(false)
            })
    }, [orderId])



    return (
        <>
            {loading ? (
                <Spinner className="center" animation="border" role="status" />
            ) : (total ? (
                <>
                    <h3>Fecha de compra: {date}</h3>
                    <CartOrderTable cart={products} totalPrice={total} orderId={orderId}/>
                </>
            ) : (
                <h2>El ID solicitado no existe</h2>
            )
            )}

        </>
    )
}

export default OrderId


/*     <>
<h3>Fecha de compra: {date}</h3>
<div className="titles">
    <h3 className="nameTitle">Cantidad x Producto</h3>
    <h3 className="priceTitle">Precio por unidad</h3>
    <h3 className="total-priceTitle">Precio total</h3>
</div>
<div className="cartContainer">
    {products.map((product, index) => <OrderIdItem key={product.id} product={product} index={index} />)}
</div>
<div className="total-buttonContainer">
    <h4 className="total">${total}</h4>
</div>
</> */