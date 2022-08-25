import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Producto ({item, img}) {

  //let counter = 0;
  const [counter, setCounter] = useState (0);


  return (


    <Card sx={{ maxWidth: 345, bgcolor:"lightpink", p: 1, m: 2}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image = {item.img}
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
      <p>Precio ${item.price}</p>
      </Typography>

      <Typography gutterBottom variant="h5" component="div">
      <p>Contador: {counter}</p>
      </Typography>

      <Button size="small" color="primary" onClick={()=>{
        setCounter (counter + 1);
        console.log (counter)
              }}> 
        Comprar / Sumar contador
      </Button>
    </CardActions>
    </Card>
  )}
