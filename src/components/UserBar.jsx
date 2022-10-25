import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './styles/UserBar.css'

const UserBar = () => {

    const [orderId, setOrderId] = useState('')

    const handleChange = () => {
        setOrderId(document.getElementById('orderId').value)
    }

    return (
        <>
            <div className='orderId'>
                <h5>Consultar ID de compra: </h5>
                <input onChange={handleChange} id='orderId' className="form-control me-2" type="search" placeholder="Consultar la compra..." aria-label="Search" />
                <Link to={'/idcompra/' + orderId}><Button variant="success">Consultar</Button></Link>
            </div>
        </>
    )
}


export default UserBar