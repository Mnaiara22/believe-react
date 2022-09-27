import React from 'react'
import Item from "./Item";
import { Grid } from '@mui/material';

const ItemList = ({productList}) => {

    return (

        <div className="cardCointainer">
            <h2>Modelos de Productos</h2>
            <Grid container justifyContent="center" spacing={1}>
            {productList.map((product)=> <Grid item xs={12} sm={4}><Item  producto={product} key={product.id}/></Grid>)}
            </Grid>
        </div>

    );
};

export default ItemList;