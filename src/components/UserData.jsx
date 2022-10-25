import React from "react";
import UserWishList from './UserWishList'
import UserBuys from "./UserBuys";

const UserData = ({user}) => {


    return (
        <>
            <img src={user.profilePic} alt="imagen de perfil del email de google" />
            <h1>Bienvenido {user.name}</h1>
            <h4>Lista de deseados</h4>
            <UserWishList wishList={user.wishList}/>
            <h4>IDs de compras realizadas</h4>
            <UserBuys buys={user.buys}/>
        </>
    )
}

export default UserData