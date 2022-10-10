import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const {cart, removeItem, cartTotal, clear} = useCart()
    const navigate = useNavigate()

        return (

            <div style={{marginTop: '6rem'}}>
                {!cart.length
                    ? <div>
                        <h2>Tu carrito esta vacio!</h2>
                        <h4> Te invitamos a ver nuestros productos</h4>
                        <button onClick={()=>navigate('/')}>Ir a comprar</button>
                        </div>

                    : <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}> 
                        <h2>Tu carrito:</h2> 
                        {cart.map((purchase)=> <CartItem key={purchase.id}purchase={purchase} />            
                        )}
                        <span>Total a pagar: ${cartTotal()}</span>
                        <div>
                            <button onClick={clear}>Vaciar carrito </button>
                            <button onClick={()=>navigate('/checkout')}>Terminar compra</button>
                        </div>
                    </div>
                }
            </div>

        )
}

export default Cart