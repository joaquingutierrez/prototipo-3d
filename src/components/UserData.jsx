import React from "react";
import UserWishList from './UserWishList'
import UserBuys from "./UserBuys";
import './styles/UserData.css'

const UserData = ({ user, deleteFromWishList }) => {


    return (
        <div className='userData'>
            <img src={user.profilePic} alt="imagen de perfil del email de google" />
            <h1>Bienvenido {user.name}</h1>
            <div className='userDataMargin'>
                <h4>Lista de deseados</h4>
                <UserWishList wishList={user.wishList} deleteFromWishList={deleteFromWishList} />
            </div>
            <div className='userDataMargin'>
                <h4>IDs de compras realizadas</h4>
                <UserBuys buys={user.buys} />
            </div>
        </div>
    )
}

export default UserData