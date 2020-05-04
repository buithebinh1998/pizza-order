import React, { useState } from "react";
import { Context } from "./Context";
import swal from "sweetalert";
export const WrappedContext = (props) => {
  let localCart = JSON.parse(localStorage.getItem("cart"));
  if (localCart === null) localCart = [];

  let localUser = JSON.parse(localStorage.getItem("user"));
  if (localUser === null) localUser = [];

  let localIsAuthenticated = JSON.parse(
    localStorage.getItem("isAuthenticated")
  );

  const [cart, setCart] = useState(localCart);

  const [user, setUser] = useState(localUser);

  const [isAuthenticated, setIsAuthenticated] = useState(localIsAuthenticated);

  const [totalPrice, setTotalPrice] = useState(0);

  const findItemInCart = (item) => {
    let index = -1;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === item.name) index = i;
      }
    }
    return index;
  };

  const increaseQuantity = (item) => {
    const newCart = [...cart];
    const index = findItemInCart(item);
    newCart[index].quantity = newCart[index].quantity + 1;
    setCart(newCart);
  };

  const decreaseQuantity = (item) => {
    const newCart = [...cart];
    const index = findItemInCart(item);
    if (newCart[index].quantity > 1) {
      newCart[index].quantity = newCart[index].quantity - 1;
      setCart(newCart);
    }
  };

  const removeFromCart = (removeItem) => {
    const newCart = [...cart];
    setCart(newCart.filter((item) => item.name !== removeItem.name));
    swal({
      title: "Remove from cart successfully!",
      icon: "success",
      button: "OK!",
      timer: 2000,
    });
  };

  const addToCart = (item) => {
    let result = {
      name: item.name,
      quantity: 1,
      price: item.price,
    };

    swal({
      title: "Add to cart successfully!",
      icon: "success",
      button: "OK!",
      timer: 2000,
    });

    const newCart = [...cart];
    const index = findItemInCart(result);

    if (index === -1) {
      newCart.push(result);
      setCart(newCart);
    } else {
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  const addPizzaToCart = (item, size, crust) => {
    const price = item.price;
    const maxPrice = item.maxPrice;
    let result = {
      name: item.name,
      quantity: 1,
      price: 0,
    };

    if (size) {
      result.name += " (M)";
      result.price = price;
    } else {
      result.name += " (L)";
      result.price = maxPrice;
    }

    if (crust) result.name += " Thin Crust";
    else result.name += " Thick Crust";

    swal({
      title: "Add to cart successfully!",
      icon: "success",
      button: "OK!",
      timer: 2000,
    });
    const newCart = [...cart];
    const index = findItemInCart(result);

    if (index === -1) {
      newCart.push(result);
      setCart(newCart);
    } else {
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  const setNewTotalPrice = (price) => {
    setTotalPrice(price);
  };

  const handleCheckOut1 = (props) => {
    if (cart.length === 0) {
      swal({
        title: "There is no items in your cart!",
        icon: "warning",
        buttons: "Back!",
        timer: 2000,
      });
    } else {
      let history = props.history;
      history.push("/cart");
    }
  };

  const handleCheckOut2 = (props) => {
    let history = props.history;
    if (cart.length === 0) {
      swal({
        title: "There is no items in your cart!",
        icon: "warning",
        buttons: "Back!",
        timer: 2000,
      });
    } else {
      if (isAuthenticated) {
        swal({
          title: "Are you sure to checkout your cart?",
          icon: "warning",
          buttons: ["Cancel", "Yes, I'm sure!"],
        }).then((isConfirm) => {
          if (isConfirm) history.push("/payment");
        });
      } else {
        swal({
          title: "Are you a new member?",
          icon: "info",
          closeOnClickOutside: false,
          buttons: ["Order without Sign In", "Sign In"],
        }).then((isConfirm) => {
          if (isConfirm) history.push("/signin");
          else history.push("/payment");
        });
      }
    }
  };

  const signIn = (user) => {
    setUser(user);
  };

  const checkAuthenticated = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeAllFromCart = () => {
    if (cart.length === 0) {
      swal({
        title: "No items to be removed!",
        icon: "warning",
        buttons: "Back!",
        timer: 3000,
      });
    } else {
      clearCart();
      swal({
        title: "Remove all from cart successfully!",
        icon: "success",
        button: "OK!",
        timer: 3000,
      });
    }
  };

  const checkVoucher = () => {
    swal({
      title: "Wrong voucher code!",
      icon: "error",
      text: "Please check your voucher code again!",
      button: "Back!",
      timer: 3000,
    });
  };

  return (
    <Context.Provider
      value={{
        cart,
        totalPrice,
        user,
        isAuthenticated,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToCart,
        addPizzaToCart,
        setNewTotalPrice,
        handleCheckOut1,
        handleCheckOut2,
        signIn,
        checkAuthenticated,
        clearCart,
        removeAllFromCart,
        checkVoucher,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
