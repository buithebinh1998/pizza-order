import React, { useEffect, useState, useContext } from "react";
import "./OrderHistory.css";
import axios from 'axios'
import OrderHistoryItem from "./OrderHistoryItem";
import { Context } from "../../context/Context/Context";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState();
  const {user} = useContext(Context);

  useEffect(() => {
    if (!orderHistory) {
      axios.get(`https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/order/email?email=${user.email}`)
      .then((response) => {
        setOrderHistory(response.data.orders);
      })
      .catch(error=>{
        console.log(error);
      });
    }
  });

  const showOrderHistory = orderHistory === null ? <h3 className="order-history-message">You haven't ordered anything!</h3> :
    <div id="table">
        <div className="row main">
          <div className="cell id">ID</div>
          <div className="cell orderCart">Cart</div>
          <div className="cell totalPrice">Total Price</div>
          <div className="cell orderTime">Order Time</div>
          <div className="cell address">Address</div>
          <div className="cell paymentMethod">Payment</div>
          <div className="cell isDone">Done</div>
        </div>
        {orderHistory && orderHistory.map((item, index) => (
          <OrderHistoryItem
            key={index}
            id={index}
            cart={item.cart}
            orderTime = {item.orderTime}
            totalPrice={item.totalPrice}
            paymentMethod={item.paymentMethod}
            address={item.user.address}
          />
        ))}
      </div>    
  
  return (
    <div>
      {showOrderHistory}
    </div>
  );
};

export default OrderHistory;
