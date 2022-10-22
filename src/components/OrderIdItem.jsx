import React from "react";

const OrderIdItem = ( { product, index } ) => {



    return (
        <>
        <div className={(index % 2 === 0) ? "cartItem" : "cartItem background-gray"}>
            <h4 className="name">{product.quantity} x {product.name}</h4>
            <h4 className="price">${product.price}</h4>
            <h4 className="total">${product.quantity * product.price}</h4>
        </div>

        </>

    )
}

export default OrderIdItem