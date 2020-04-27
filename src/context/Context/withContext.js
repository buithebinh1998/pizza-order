import React, {useState} from 'react'
import {Context} from './Context'

export const WrappedContext =  (props) => {
    const state = {
        cart: [],
        totalPrice: 0
    };

    const [context, setContext] = useState(state);
    return(
        <Context.Provider value={[context, setContext]}>
            {props.children}
        </Context.Provider>
    );
}