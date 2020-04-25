import React, {useState} from 'react'
import {CartContext} from './CartContext'

export const Context =  (props) => {
    const [cart, setCart] = useState([]); 
    
    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
}