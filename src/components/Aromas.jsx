import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


export default function Aromas({item, img}) {
    return (

    <Card sx={{ maxWidth: 300, bgcolor:"lightpink", p: 1, m: 2 }}>
        <CardActionArea>
            <Typography gutterBottom variant="h5" component="div">
                    {item.title}
            </Typography>

            <CardMedia
                    component="img"
                    height="auto"
                    image= {img}
                    alt= {item.title}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
}
