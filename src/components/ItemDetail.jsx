import React, { useState } from "react";
import ItemCount from './ItemCount'
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Toolbar } from '@mui/material'


const ItemDetail = ({productDetail}) => {
    const [counter, setCounter] = useState(1)
    const [purchase, setPurchase] = useState(false)
    const {name, measure, price, stock, img, id}= productDetail
    const navigate = useNavigate()
    const {addItem} = useCart()

    const onAdd = () => {
        let purchase = {
            id,
            name,
            price,
            stock,
            img,
            quantity:counter
        }
        setPurchase(true)
        addItem(purchase)
    }
    
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
            <Toolbar />
            <h2>Detalle de: {name}</h2>
            <img src={img} alt={name} style={{width:'25rem'}}/>
            <p>{measure}</p>
            <p>${price}</p>
            { !purchase
            ? <ItemCount stock={stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter}/>
            : <div style={{display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
                <button onClick={()=>navigate('/')}>Seguir comprando</button>
                <button onClick={()=>navigate('/cart')}>Ir al carrito</button>
            </div>
            }
        </div>
    )
}

export default ItemDetail

