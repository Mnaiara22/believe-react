import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/firebase'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'

const ItemListContainer = () => {

    const [productList, setProductList] = useState ([])
    const [loading, setLoading] = useState(false)
    const{ lineaId }= useParams()

    //Firebase

    useEffect(()=>{
        setLoading(true)
        const products = lineaId ?query(collection(db, "products"), where("linea", "==",  lineaId) ) : collection (db, "products")
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

    //Bienvenida

    const saludo = "Bienvenidos a Believe"

        return (

            <div> 
                <Hero img={'/images/logo.png'} saludo={saludo}  />
                {loading ?     
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="inherit" />
                </Stack> 
                : 
                <ItemList productList={productList}/>}
            </div>
        )
}

export default ItemListContainer
