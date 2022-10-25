import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import UserData from './UserData'

const UserContainer = () => {

    const { user, signInwithGoogle} = useContext(CartContext)

return (
    <>
        {user.name ? <UserData user={user}/> : <Button variant='success' onClick={signInwithGoogle}>Iniciar sesion</Button>}
    </>
)
}

export default UserContainer