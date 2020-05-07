import React, { useContext } from "react";
import Payment from "../../components/Payment/Payment";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import background from "../../assets/img/bg.png";
import "./PaymentPage.css";
import CartPayment from "./CartPayment";
import { Context } from "../../context/Context/Context";

const PaymentPage = () => {
  const { cart } = useContext(Context);
  const flexPaymentPage =
    cart.length > 0 ? (
      <div className="payment-page">
        <div className="payment-container">
          <Payment />
        </div>
        <div className="paymentcart-container">
          <CartPayment />
        </div>
      </div>
    ) : (
      <div>
        <h1 style={{ color: "#e31837" }} className="payment-title">
          There is no item in your cart!
        </h1>
      </div>
    );
  return (
    <div
      className="payment-page-wrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <div id="spacer"></div>
      <h1 className="payment-title">DELIVERY INFORMATION</h1>
      {flexPaymentPage}
      <Footer />
    </div>
  );
};

export default PaymentPage;
