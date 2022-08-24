//Tiene la logica pesada de sus hijos

import React from 'react'

const ItemListContainer = ({saludo, img}) => {
    return (
        <div> 
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={img} alt="Logo Believe" height="300px"/>
            <h1>{saludo}</h1>
        </div>
    )
}

export default ItemListContainer