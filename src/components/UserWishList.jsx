import React from "react";
import { Link } from "react-router-dom";


const UserWishList = ({ wishList }) => {

    return (
        <>
            <ul>
                {wishList.map((item) => {
                    return (
                        <li>
                            <Link key={item.id} to={'/item/' + item.id}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserWishList