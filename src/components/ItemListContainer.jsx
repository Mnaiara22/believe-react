import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Hero from './Hero'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/firebase'

const ItemListContainer = () => {

    const [productList, setProductList] = useState ([])
    const [loading, setLoading] = useState(false)
    const{ lineaId }= useParams()



    //Firebase

    useEffect(()=>{

        setLoading(true)
        const products = lineaId ?query(collection(db, "products"), where("list", "==",  lineaId) ) : collection (db, "products")
        
        getDocs (products)
        .then((result)=> {
            const list = result.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })

        setProductList(list)

        })
        .catch((error)=> console.log (error))
        .finally(()=>setLoading(false))
    }, [lineaId])

/*
    //Mock
    useEffect(()=>{
        setLoading (true)
        data
            .then((res)=>{
            if (lineaId){
                setProductList(res.filter((item)=>item.linea === lineaId))
            }else{
                setProductList(res)}
            })
            .catch((error)=>console.log(error))
            .finally (()=> setLoading(false))
        },[lineaId])
*/
          //Bienvenida
    const saludo = "Bienvenidos a Believe"
        return (
            <div> 
                <Hero img={'/images/logo.png'} saludo={saludo}  />
                {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
            </div>
        )
}

export default ItemListContainer

//Agregar spinner