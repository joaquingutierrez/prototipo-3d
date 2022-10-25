import React from "react";
import { Link } from "react-router-dom";

const UserBuys = ({ buys }) => {


    return (
        <>
            <ul>
                {buys.map((saleId) => {
                        return (
                            <li>
                                <Link key={saleId} to={'/idcompra/' + saleId}>{saleId}</Link>
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}

export default UserBuys