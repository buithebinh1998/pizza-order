import React from "react";
import "./OrderHistoryItem.css";
const OrderHistoryItem = (props) => {
  const orderHistoryCart = props.cart;
  const loadOrderHistoryCart = orderHistoryCart.map((item, index) => {
    let showPrice = item.price * 1000;
    let showPriceString = new Intl.NumberFormat("de-DE").format(showPrice);
    return (
      <div className="order-history-cart-item" key={index}>
        <div className="order-history-cart-name">{item.name}</div>
        <div className="order-history-cart-total-wrapper">
          <div>x{item.quantity}</div>

          <div className="order-history-cart-price">
            {showPriceString + "Đ"}
          </div>
        </div>
      </div>
    );
  });

  let showTotalPrice = props.totalPrice * 1000;
  let showTotalPriceString = new Intl.NumberFormat("de-DE").format(
    showTotalPrice
  );
  return (
    <div className="row">
      <div className="cell id">{props.id + 1}</div>
      <div className="cell orderCart">{loadOrderHistoryCart}</div>
      <div className="cell totalPrice">{showTotalPriceString + "Đ"}</div>
      <div className="cell orderTime">{props.orderTime}</div>
      <div className="cell address">{props.address}</div>
      <div className="cell paymentMethod">{props.paymentMethod}</div>
      <div className="cell isDone">Delivered</div>
    </div>
  );
};

export default OrderHistoryItem;
