import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';

const Item = ({producto}) => {
const navigate = useNavigate()


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
      </Typography>
        <div>
          <button onClick={()=>navigate(`/detalle/${producto.id}`)}>Ver más</button>  
        </div>
    </CardActions>
    </Card>
  )}

  export default Item

