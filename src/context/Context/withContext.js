import React, {useState} from 'react'
import {Context} from './Context'
import swal from 'sweetalert'
export const WrappedContext =  (props) => {  

    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (localCart===null) localCart = [];

    const [cart, setCart] = useState(localCart);

    const [totalPrice, setTotalPrice] = useState(0);
    
    const findItemInCart = (item) => { 
        let index = -1;
        if(cart.length>0){
            for(let i=0; i<cart.length; i++){
                if(cart[i].name === item.name) index=i;
            }
        }
        return index;
    }

    const increaseQuantity = (item) => {
        const newCart = [...cart];
        const index = findItemInCart(item);
        newCart[index].quantity = newCart[index].quantity+1;
        setCart(newCart);
    }

    const decreaseQuantity = (item) => {
        const newCart = [...cart];
        const index = findItemInCart(item);
        if(newCart[index].quantity>1) {
            newCart[index].quantity = newCart[index].quantity-1;
            setCart(newCart);
        }
    }

    const removeFromCart = (removeItem) => {
        const newCart = [...cart];
        setCart(newCart.filter(item => item.name !== removeItem.name));
        swal({
            title: "Remove from cart successfully!",
            icon: "success",
            button: "OK!",
            timer: 2000
        });
    }

    const addToCart = (item) => {
        let result = {
            name: item.name,
            quantity: 1,
            price: item.price,
        };
        
        result.price = result.price.slice(0, result.price.length - 5) *1000;

        swal({
            title: "Add to cart successfully!",
            icon: "success",
            button: "OK!",
            timer: 2000
        });

        const newCart = [...cart];
        const index = findItemInCart(result);

        if(index===-1){
            newCart.push(result);
            setCart(newCart);
        }
        else{
            newCart[index].quantity += 1;
            setCart(newCart);
        }
    }

    const addPizzaToCart = (item, size, crust) => {
        let result = {
            name: item.name,
            quantity: 1,
            price: item.price,
        };
    
        if(size) {
            result.name += " (M)";
            result.price = result.price.slice(0,3)*1000;
        }
        else{
            result.name += " (L)"
            result.price = result.price.slice(11,14)*1000;
        }

        if(crust) result.name += " Thin Crust";
        else result.name += " Thick Crust";
        
        swal({
            title: "Add to cart successfully!",
            icon: "success",
            button: "OK!",
            timer: 2000
        });
        const newCart = [...cart];
        const index = findItemInCart(result);
    
        if(index===-1){
            newCart.push(result);
            setCart(newCart);
        }
        else{
            newCart[index].quantity += 1;
            setCart(newCart);
        }
    };

    const setNewTotalPrice = (price) => {
        setTotalPrice(price);
    }

    const handleCheckOut1 = (props) =>{
        if(cart.length===0){
            swal({
                title: "There is no items in your cart!",
                icon: "warning",
                buttons: "Back!",
                timer: 2000
            })
        }
        else{
            swal({
                title: "Are you sure to checkout your cart?",
                icon: "warning",
                buttons: ["Cancel", "Yes, I'm sure!"],
                dangerMode: true
            }).then((isConfirm)=>{
                let history = props.history;
                if(isConfirm) history.push('/cart');
            });
        }
    }

    return(
        <Context.Provider value={{cart, totalPrice, findItemInCart, increaseQuantity, decreaseQuantity, removeFromCart, addToCart, addPizzaToCart, setNewTotalPrice, handleCheckOut1}}>
            {props.children}
        </Context.Provider>
    );
}