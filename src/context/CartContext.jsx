import React, { createContext, useState, useEffect } from "react";
import { auth, provider, db } from '../firebase/firebase'
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const CartContext = createContext()


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [user, setUser] = useState({
        uid: '',
        name: '',
        email: '',
        profilePic: '',
        wishList: [],
        buys: []
    })

    const signInwithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                //se consulta a la base de datos si el usuario existe, de lo contrario se crea un documento nuevo con sus datos básicos
                const userRef = doc(db, 'users', result.user.uid)
                getDoc(userRef)
                    .then((data) => {
                        let userData = {}
                        if (data.exists()) {
                            userData = data.data()
                        } else {
                            userData = {
                                uid: result.user.uid,
                                name: result.user.displayName,
                                email: result.user.email,
                                profilePic: result.user.photoURL,
                                wishList: [],
                                buys: []
                            }
                            setDoc(doc(db, "users", userData.uid), {
                                ...userData
                            })
                        }
                        setUser(userData)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
    }

    const closeSession = () => {
        setUser({
            uid: '',
            name: '',
            email: '',
            profilePic: '',
            wishList: [],
            buys: []
        })
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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
        <CartContext.Provider value={{ cart, addItem, addDuplicateItem, removeItem, clear, isInCart, quantityProducts, stockLocalControl, totalItem, totalPrice, user, signInwithGoogle, closeSession }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider