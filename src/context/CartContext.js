import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
// import { useLocalStorage } from "../useLocalStorage";

export const CartContext = createContext();

//seteamos LocalStorage
const productsLS = JSON.parse(localStorage.getItem('cart') || '[]')


export const CartProvider = ({children}) => {
//inicializamos la variable de estado con el localStorage

const [cart, setCart] = useState(productsLS);


useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])


    const addItem = (item) => {

        const existsInCart = cart.find((prod)=> prod.id === item.id)

        if(existsInCart){

            const updatedCart = cart.map((prod)=> {

                if (prod.id === item.id){

                        if(prod.quantity + item.quantity <= prod.stock){

                        return {...prod, quantity:prod.quantity + item.quantity}

                    }else{

                        <p>No tenemos tanto stock de este producto. Maximo ${prod.stock}</p>

                        return {...prod, quantity:prod.stock}

                    }

                    return prod

                }

            })

            setCart(updatedCart)

        } else {

        setCart([...cart, item])}

    }



    const clear = () => {

        setCart([])

    }



    const removeItem= (id) => {

        setCart(cart.filter((prod)=> prod.id !== id))

    }



    const isInCart = (id) => {

        return cart.some((prod)=>prod.id === id)

    }



    const cartQuantity = () => {

        return cart.reduce((accumulator, prod) => accumulator += prod.quantity, 0)

    }



    const cartTotal = () => {

        return cart.reduce((accumulator, prod)=> accumulator += prod.price * prod.quantity,0)

    }



    return(

        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, cartQuantity, cartTotal}}>

            {children}

        </CartContext.Provider>

    )

}

export const useCart = () => useContext (CartContext)