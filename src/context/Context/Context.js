import {createContext} from 'react'

export const Context = createContext({
    cart: [],
    totalPrice: 0,
    user: [],
    isAuthenticated: false,
    findItemInCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    removeFromCart: () => {},
    addToCart: () => {},
    addPizzaToCart:() => {},
    setNewTotalPrice: () => {},
    saveCartToLocalStorage: () => {},
    handleCheckOut1: () => {},
    handleCheckOut2: () => {},
    signIn: () => {},
    checkAuthenticated: () => {}
});