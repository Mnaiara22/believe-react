import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Producto ({item, color, img}) {
  return (

    


    <Card sx={{ maxWidth: 345, bgcolor:"lightpink"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt={item.name}
        />
        <CardContent sx={{paddingTop: -2}}>
          <Typography gutterBottom variant="h5" component="div">
          <p>{item.name}</p>
          </Typography>
          <Typography variant="body2">
            Vela línea {item.linea} de {item.measure}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Typography gutterBottom variant="h5" component="div">
      <p>precio ${item.price}</p>
      </Typography>

      <Button size="small" color="primary">
        Comprar
      </Button>
    </CardActions>
    </Card>
  )}
