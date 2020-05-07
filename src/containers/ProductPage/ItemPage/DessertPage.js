import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import imgPizza2 from "../../../assets/img/slider3.jpg";
import imgPizza1 from "../../../assets/img/slider2.jpg";
import background from "../../../assets/img/bg.png";
import DataDessert from "../../../components/Item/Dessert";
import "./ItemPage.css";
import NavProduct from "../NavProduct/NavProduct";
import Cart from "../../../components/Cart/Cart";
import MiniCart from "../../../components/Cart/MiniCart";
const DessertPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div id="spacer"></div>
      <img src={imgPizza1} style={{ width: "50%", height: "50%" }} alt="" />
      <img src={imgPizza2} style={{ width: "50%", height: "50%" }} alt="" />
      <NavProduct />
      <div className="category-name">
        <h1>DESSERT</h1>
      </div>
      <div className="category-page">
        <div className="item-container">
          <DataDessert />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <MiniCart />
    </div>
  );
};

export default DessertPage;
