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

    const quantityProducts = (array) => {
        let quantityProducts = 0;
        array.map((product)=> 
            quantityProducts += product.quantity
        )
        return quantityProducts
    }

    const stockLocalControl = (cart, product, id) => {
        if (isInCart(id) + 1)  {
            return (product.stock - cart[isInCart(id)].quantity)
        }
    }

    return (
        <CartContext.Provider value={ {cart, addItem, addDuplicateItem, removeItem, clear, isInCart, quantityProducts, stockLocalControl} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider