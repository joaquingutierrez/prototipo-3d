import React from "react";
import { Link } from "react-router-dom";


const UserWishList = ({ wishList, deleteFromWishList }) => {
    
    
    return (
        <>
            {wishList.length > 0 ? (
            <ul>
                {wishList.map((item) => {
                    return (
                        <li key={item.id}>
                            <span onClick={()=>deleteFromWishList(item.id)}>Eliminar de favoritos</span><Link to={'/item/' + item.id}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>

            ) : (
                <h4>No hay productos agregados</h4>
            )}
        </>
    )
}

export default UserWishList