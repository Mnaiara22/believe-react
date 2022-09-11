import React, { useState } from "react";

const ItemCount = ({initial, stock, onAdd, counter, setCounter}) => {

    const add = () => {

        if (counter < stock){
            setCounter (counter + 1)}
    }

    const subtract = () => {
        if (counter > 0) {        
            setCounter (counter - 1)}
    }

    return (
        <div>
            <button onClick={subtract}>-</button>
            <span>{counter}</span>
            <button onClick={add}>+</button>
            <button onClick={onAdd}> Agregar al carrito </button>   
        </div>
    )
}

export default ItemCount