import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
            p: 0,
            m: 1,
            fontSize: '0.875rem',
            fontWeight: '700',
            ...sx,
            }}
            {...other}
        />
    );
}

const steps = [
    'Elegí el modelo y aroma que mas te guste en nuestra web. Algunos cuentan con stock y otros son a pedido.',
    'Para encargar el producto comunicate mediante el formulario o las redes sociales. ',
    'Coordinamos la entrega. Podés retirar el producto o te lo enviamos. ',
    'Podés abonar en efectivo, transferencia o MercadoPago. '
];

export default function Main() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 1, m: 1, }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                <Item><img src='images/anna.avif' alt="" height="300px"/></Item>
                <Item><img src='images/wendy.avif' alt="" height="300px"/></Item>
                <Item><img src='images/duquesa.avif' alt="" height="300px"/></Item>
            </Box>

            <Typography sx={{ bgcolor:"darkpink", ml: '10%', mr: '10%' }}>
                <p>Es emprendimiento que surgió en un momento muy importante de mi vida, donde necesitaba estar enfocada en algo que despeje mi mente y relaje mis pensamientos. Es ahí donde se despertaron mis deseos, sueños, proyectos y desafíos de hacer algo nuevo que me guste y haga feliz... y poder compartirlo con ustedes...Believe es un lugar donde vas a encontrar productos ideales para decorar y perfumar tu hogar, tu trabajo o tu lugar favorito.</p>
            </Typography>

            <Box sx={{ width: '70%', display: 'flex',flexDirection: 'column', justifyContent: 'center', ml: '15%', mr: '15%' }}>
                <h2>¿Cómo comprar?</h2>
                <Stepper activeStep={-1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

        </Box>

    );
}


