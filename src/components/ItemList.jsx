import React from 'react'
import Item from "./Item";

const ItemList = ({listaProductos}) => {

    return (

        <div className="cardCointainer">
            <h2>Modelos de Productos</h2>
            {listaProductos.map((producto)=> <Item  producto={producto} key={producto.id}/>)}
        </div>

    );
};

export default ItemList;