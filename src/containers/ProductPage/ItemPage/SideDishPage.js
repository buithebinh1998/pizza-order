import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import imgPizza2 from "../../../assets/img/slider3.jpg";
import imgPizza1 from "../../../assets/img/slider2.jpg";
import background from "../../../assets/img/bg.png";
import DataSideDish from "../../../components/Item/SideDish";
import NavProduct from "../NavProduct/NavProduct";
import "./ItemPage.css";
import Cart from "../../../components/Cart/Cart";
import MiniCart from "../../../components/Cart/MiniCart";

const SideDishPage = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div id="spacer"></div>
      <img src={imgPizza1} style={{ width: "50%", height: "50%" }} alt="" />
      <img src={imgPizza2} style={{ width: "50%", height: "50%" }} alt="" />
      <NavProduct />

      <div className="category-name">
        <h1>SIDE DISH</h1>
      </div>
      <div className="category-page">
        <div className="item-container">
          <DataSideDish />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </div>
      <MiniCart />
      <Footer />
    </div>
  );
};

export default SideDishPage;
