import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {db} from '../firebase/firebase'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

useEffect(()=>{
    const productCollection = collection(db, "products")
    const referenceDoc = doc(productCollection, id)

    getDoc(referenceDoc)
    .then((result)=> {
        setProductDetail({
            id: result.id,
            ...result.data()
        })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}, [])


    return (
        <div>
        {loading ? 
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="inherit" />
            </Stack> 
            : 
            <ItemDetail productDetail={productDetail}/>}
        </div>
    )
}

export default ItemDetailContainer
