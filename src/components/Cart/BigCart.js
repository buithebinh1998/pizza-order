import React, { useContext, useEffect } from "react";
import "./BigCart.css";
import { Context } from "../../context/Context/Context";
import { withRouter } from "react-router-dom";

const BigCart = (props) => {
  const {
    cart,
    increaseQuantity,
    removeFromCart,
    decreaseQuantity,
    setNewTotalPrice,
    handleCheckOut2,
    removeAllFromCart,
  } = useContext(Context);
  let totalPrice = 0;

  const loadCart = cart.map((item, index) => {
    const showPrice = item.price * item.quantity * 1000;
    const showPriceString = new Intl.NumberFormat("de-DE").format(showPrice);
    totalPrice += showPrice;
    setNewTotalPrice(totalPrice);
    return (
      <div className="bigcart-info" key={index}>
        <div className="bigcart-info-name">{item.name}</div>
        <div className="bigcart-quantity">
          <button
            className="bigcart-quantity-button"
            onClick={() => decreaseQuantity(item)}
          >
            -
          </button>
          <div className="bigcart-info-quantity">{item.quantity}</div>
          <button
            className="bigcart-quantity-button"
            onClick={() => increaseQuantity(item)}
          >
            +
          </button>
        </div>
        <div className="bigcart-remove-wrappper">
          <button
            className="bigcart-remove-button"
            onClick={() => removeFromCart(item)}
          >
            Remove
          </button>
        </div>
        <div className="bigcart-info-price">{showPriceString + "Đ"}</div>
      </div>
    );
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="bigcart">
      <div>
        <div className="bigcart-header">
          <div></div>
          <div className="bigcart-title">REVIEW CART</div>
          <button className="bigcart-remove-button" onClick={removeAllFromCart}>
            Remove all
          </button>
        </div>
        <hr />
        <div className="bigcart-load">{loadCart}</div>
        <div className="bigcart-total-wrap">
          <div className="bigcart-total">Total:</div>
          <div className="bigcart-price">
            {Intl.NumberFormat("de-DE").format(totalPrice) + "Đ"}
          </div>
        </div>
      </div>
      <div className="bigcart-button-wrapper">
        <button
          className="bigcart-button"
          style={{ background: "linear-gradient(to right, #04354c,#0078ae)" }}
          onClick={props.history.goBack}
        >
          BACK
        </button>
        <button
          className="bigcart-button"
          onClick={() => handleCheckOut2(props)}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default withRouter(BigCart);
