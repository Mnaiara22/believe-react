import React, { useState } from 'react'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Toolbar } from '@mui/material'

const Checkout = () => {

    const [buyer, setBuyer]= useState({})
    const {cart, cartTotal, clear} = useCart()
    const [orderId, setOrderId]= useState('')
    const navigate = useNavigate()
    const [message, setMessage]=useState(false)
    const [loader, setLoader] = useState(false)
    
    const buyerData = (e)=> {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
    }



    const finish = (e) =>{
        e.preventDefault()
        if(Object.values(buyer).length === 3){
            setMessage(false)
            setLoader(true)
            const sales = collection(db, "orders")
            addDoc(sales, {
                buyer,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }else{
            setMessage(true)
        }
    }

    if(loader){
        return <p>Cargading...</p>
    }
    return (
        <div>
            {!orderId
            ?<div>
                <h2>Checkout</h2>
                <h4>Por favor complete todos los campos</h4>
                <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finish}>
                    <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={buyerData}/>
                    <input className="form-control"  type="number" placeholder='011587892545' name="phone" onChange={buyerData}/>
                    <input className="form-control" type="email" placeholder='pepe@gmail.com' name="email" onChange={buyerData}/>
                    <button className="btn btn-primary" type='submit'>Finalizar Compra</button>
                    {message && <p style={{color:'red'}}>Por favor complete todos los campos</p>}
                </form>
            </div>
            :
            <div>
                <Toolbar />
                <Toolbar />
                <h2>Muchas gracias por su compra!</h2>
                <h4>Su orden es: {orderId}</h4>
                <button className="btn btn-success" onClick={()=> navigate('/')}>Volver</button>
            </div>}
        </div>
    )
}

export default Checkout