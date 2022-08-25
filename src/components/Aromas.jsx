import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function Aromas({item, img}) {
    return (
    
        <Accordion sx={{ p: 5, m: 5, bgcolor:"lightpink", width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <AccordionSummary sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                expandIcon={<ExpandMoreIcon />}
                >
                <CardMedia sx={{ maxWidth: 300, }}
                    component="img"
                    image= {img}
                    alt= {item.title}
                />
                <Typography ><h3>{item.title}</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {item.description}
                </Typography>
            </AccordionDetails>
        </Accordion>

    );
}