import React from 'react'
import Item from "./Item";
import { Grid } from '@mui/material';

const ItemList = ({listaProductos}) => {

    return (

        <div className="cardCointainer">
            <h2>Modelos de Productos</h2>
            <Grid container justifyContent="center" spacing={1}>
            {listaProductos.map((producto)=> <Grid item xs={12} sm={4}><Item  producto={producto} key={producto.id}/></Grid>)}
            </Grid>
        </div>

    );
};

export default ItemList;