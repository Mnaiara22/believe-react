import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';

const Item = ({producto}) => {

const onAdd = () => {
  console.log("Se agrega al carrito")};

  return (

    <Card sx={{ maxWidth: 345, bgcolor:"lightpink", p: 1, m: 2}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image = {producto.img}
          alt={producto.name}
        />
        <CardContent sx={{paddingTop: -2}}>
          <Typography gutterBottom variant="h5" component="div">
          <p>{producto.name}</p>
          </Typography>
          <Typography variant="body2">
            Vela línea {producto.linea} de {producto.measure}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Typography gutterBottom variant="h5" component="div">
      <p>Precio ${producto.price}</p>
      <ItemCount initial={0} onAdd={onAdd} stock={producto.stock}/>
      </Typography>
      
    </CardActions>
    </Card>
  )}

  export default Item