import React from "react";
import { Link } from "react-router-dom";
import './styles/UserBuys.css'

const UserBuys = ({ buys }) => {


    return (
        <>
            {
                buys.length > 0 ? (
                    buys.map((saleId, index) => {
                        return (
                            <div className='userBuysTable userBuysIds' key={saleId} >
                                <Link className={index % 2 === 0 ? 'styleNone' : 'styleNone background-gray'} to={'/idcompra/' + saleId}><h5>{saleId}</h5></Link>
                            </div>
                        )
                    })

                ) : (
                    <h5>Aun no hay compras registradas</h5>
                )
            }
        </>
    )
}

export default UserBuys