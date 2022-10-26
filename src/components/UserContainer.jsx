import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import UserData from './UserData'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import './styles/UserContainer.css'

const UserContainer = () => {

    const { user, signInwithGoogle } = useContext(CartContext)
    const [userData, setUserData] = useState(user)


    //este useEffect es para que pueda traer la imagen de user y los datos de la wishList y los IDs de las compras
    useEffect(() => {
        setUserData(user)
    }, [user])

    const deleteFromWishList = (id) => {
        user.wishList = userData.wishList.filter((item) => item.id !== id)

        const userRef = doc(db, "users", userData.uid);
        updateDoc(userRef, {
            wishList: user.wishList
        })

        setUserData({
            ...userData,
            wishList: user.wishList
        })
    }

    const closeSession = () => {
        setUserData({
            uid: '',
            name: '',
            email: '',
            profilePic: '',
            wishList: [],
            buys: []
        })
    }
    return (
        <div className="userContainer">
            {
                userData.name ?
                    <UserData user={userData} deleteFromWishList={deleteFromWishList} closeSession={closeSession} />
                    :
                    <Button variant='success' onClick={signInwithGoogle} className='buttonSession'>Iniciar sesion</Button>
            }

        </div>
    )
}

export default UserContainer