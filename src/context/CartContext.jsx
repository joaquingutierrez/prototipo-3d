import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext()




const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
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

    const quantityProducts = (cart) => {
        let quantityProducts = 0;
        cart.map((product) =>
            quantityProducts += product.quantity
        )
        return quantityProducts
    }

    const stockLocalControl = (cart, product, id) => {
        if (isInCart(id) + 1) {
            return (product.stock - cart[isInCart(id)].quantity)
        }
    }

    const totalItem = (product) => {
        return product.quantity * product.price
    }
    
    
    const totalPrice = (cart) => {
        let total = 0
        cart.map((product) =>
            total += totalItem(product)
        )
        return total
    }

    return (
        <CartContext.Provider value={{ cart, addItem, addDuplicateItem, removeItem, clear, isInCart, quantityProducts, stockLocalControl, totalItem, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider