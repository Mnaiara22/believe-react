import React from 'react';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const{cartQuantity} =useCart()
    return(
        <div>
            <LocalMallTwoToneIcon size='medium'/>
            <span>{cartQuantity() || ''}</span>
        </div>
    )
}

export default CartWidget