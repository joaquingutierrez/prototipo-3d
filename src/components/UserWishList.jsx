import React from "react";
import { Link } from "react-router-dom";
import './styles/UserWishList.css'


const UserWishList = ({ wishList, deleteFromWishList }) => {
    
    
    return (
        <>
            {wishList.length > 0 ? (
            <>
                {wishList.map((item, index) => {
                    return (
                        <div className={index % 2 === 0 ? 'wishListTable' : 'wishListTable background-gray'} key={item.id}>
                            <h5><span className='deleteWishListItem' onClick={()=>deleteFromWishList(item.id)}>Eliminar de favoritos</span></h5>
                            <Link className='wishListItem styleNone' to={'/item/' + item.id}><h5>{item.name}</h5></Link>
                        </div>
                    )
                })}
            </>

            ) : (
                <h6>No hay productos agregados</h6>
            )}
        </>
    )
}

export default UserWishList