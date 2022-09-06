import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState ([])
    const [loading, setLoading] = useState(false)
    const{measureId}= useParams()

    useEffect(()=>{
        setLoading (true)
        data
            .then((res)=>{
            if (measureId){
                setListaProductos(res.filter((item)=>item.measure === measureId))
            }else{
                setListaProductos(res)}
            })
            .catch((error)=>console.log(error))
            .finally (()=> setLoading(false))
        },[measureId])

        return (
            <div> 
                {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            </div>
        )
}

export default ItemListContainer

//Agregar spinner