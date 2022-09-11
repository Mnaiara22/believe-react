import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Hero from './Hero'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState ([])
    const [loading, setLoading] = useState(false)
    const{lineaId}= useParams()

    useEffect(()=>{
        setLoading (true)
        data
            .then((res)=>{
            if (lineaId){
                setListaProductos(res.filter((item)=>item.linea === lineaId))
            }else{
                setListaProductos(res)}
            })
            .catch((error)=>console.log(error))
            .finally (()=> setLoading(false))
        },[lineaId])

          //Bienvenida
  const saludo = "Bienvenidos a Believe"
        return (
            <div> 
                <Hero img={'/images/logo.png'} saludo={saludo}  />
                {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            </div>
        )
}

export default ItemListContainer

//Agregar spinner