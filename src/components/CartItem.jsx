import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({purchase}) => {
    const{removeItem}=useCart()
    return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem', width:'100%'}}>
                <img src={purchase.img} alt={purchase.name} style={{width:'15rem'}}/>
                <span>{purchase.name}</span>
                <span>{purchase.quantity}</span>
                <span>${purchase.price}</span>
                <button className='btn btn-danger' onClick={()=>removeItem(purchase.id)}>X</button>
    </div>
    )
}

export default CartItem