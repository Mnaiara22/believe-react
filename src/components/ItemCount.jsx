import React, { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState (initial)

    const add = () => {
        if (counter < stock){
            setCounter (counter + 1)}
    }

    const subtract = () => {
        if (counter > 0) {        
            setCounter (counter - 1)}
    }

    const confirm = () => {
        console.log("Se agrega al carrito");
    };

    return (
        <div>
            <button onClick={subtract}>-</button>
            <span>{counter}</span>
            <button onClick={add}>+</button>
            <button onClick={confirm}> Agregar al carrito </button>   
        </div>
    )
}

export default ItemCount