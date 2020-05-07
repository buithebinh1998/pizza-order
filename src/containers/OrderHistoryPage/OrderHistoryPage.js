import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import Footer from "../../components/Footer/Footer";
import "./OrderHistoryPage.css";
import background from "../../assets/img/bg.png";
import { Context } from "../../context/Context/Context";

const OrderHistoryPage = () => {
  const { isAuthenticated } = useContext(Context);
  const flexOrderHistory = isAuthenticated ? (
    <OrderHistory />
  ) : (
    <h3 className="order-history-message">
      You haven't signed in your account.
    </h3>
  );
  return (
    <div
      className="order-history-page-wrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <div id="spacer"></div>
      <h2 className="order-history-title">ORDER HISTORY</h2>
      {flexOrderHistory}
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
