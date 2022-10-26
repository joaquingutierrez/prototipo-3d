import React, { useState } from "react";
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


    const [emailConfirmation, setEmailConfirmation] = useState(false)

    const handleChangeEmail = () => {
        const email = document.getElementById('email').value
        const email2 = document.getElementById('email2').value
        if (email2 === email) {
            return setEmailConfirmation(true)
        }
        return setEmailConfirmation(false)
    }

    return (
        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className='buyerForm'>
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
                        <input onChange={handleChangeEmail} type="email" id="email" />
                        <label>
                            Confimación del Email:
                        </label>
                        <input autoComplete="off" onChange={handleChangeEmail} className={emailConfirmation ? '' : 'wrong'} type="email" id="email2" />
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={() => buy(cart, user(), emailConfirmation)}>
                        Terminar compra
                    </Button>
                </Modal.Footer>
            </Modal>





        </>
    )

}

export default BuyerForm