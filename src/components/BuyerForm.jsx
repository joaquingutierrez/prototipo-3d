import React from "react";
import { Button, Modal } from "react-bootstrap";
import './styles/BuyerForm.css'

const BuyerForm = ({ show, handleClose, buy, cart }) => {

    const user = () => {
        return ({
            name: document.getElementById('name').value,
            phone: document.getElementById('tel').value,
            email: document.getElementById('email').value
        })
    }

    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className='userData'>
                        <label>
                            Nombre y apellido:
                        </label>
                        <input type="text" id="name" />
                        <label>
                            Teléfono:
                        </label>
                        <input type="tel" id="tel" />
                        <label>
                            Email:
                        </label>
                        <input type="email" id="email" />
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={() => buy(cart, user())}>
                        Terminar compra
                    </Button>
                </Modal.Footer>
            </Modal>





        </>
    )

}

export default BuyerForm