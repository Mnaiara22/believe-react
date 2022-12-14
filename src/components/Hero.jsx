import { Toolbar } from '@mui/material'
import React from 'react'

const Hero = ({saludo, img}) => {

    return (
        <div style={{marginTop: '2rem'}}>
            <Toolbar />
            <Toolbar />
            <img src={img} alt="Logo Believe" height="300px"/>
            <h1>{saludo}</h1>
        </div>
    )
}

export default Hero