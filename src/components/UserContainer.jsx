import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import UserData from './UserData'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const UserContainer = () => {

    const { user, signInwithGoogle } = useContext(CartContext)
    const [userData, setUserData] = useState(user)


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

    return (
        <>
            {
                user.name ?
                    <UserData user={userData} deleteFromWishList={deleteFromWishList} />
                    :
                    <Button variant='success' onClick={signInwithGoogle}>Iniciar sesion</Button>
            }

        </>
    )
}

export default UserContainer