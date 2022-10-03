import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState( [] )

    const addItem = (item, quantity) => {
        setCart([...cart, {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity
        }])

    }

    const addDuplicateItem = (index, quantity) => {
        setCart([...cart], cart[index].quantity += quantity)
    }

    const removeItem = (itemId) => {
        setCart(
            cart.filter((item) => item.id !== itemId)
        )
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.findIndex((item) => item.id === id)
        
    }


    return (
        <CartContext.Provider value={ {cart, addItem, addDuplicateItem, removeItem, clear, isInCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider