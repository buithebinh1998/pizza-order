import React, { useState, useContext } from "react";
import "./Modal.css";
import { Context } from "../../context/Context/Context";
import {withRouter} from 'react-router-dom'

const PizzaForm = (props) => {
  const { addPizzaToCart } = useContext(Context);

  const [sizeChecked, setSizeChecked] = useState({ size1: true, size2: false });
  const [crustChecked, setCrustChecked] = useState({
    crust1: true,
    crust2: false,
  });

  const onCheckSizeChange = (event) => {
    if (event.target.value === "medium")
      setSizeChecked({ size1: true, size2: false });
    else setSizeChecked({ size1: false, size2: true });
  };

  const onCheckCrustChange = (event) => {
    if (event.target.value === "thin")
      setCrustChecked({ crust1: true, crust2: false });
    else setCrustChecked({ crust1: false, crust2: true });
  };

  const itemPizza = {
    name: props.name,
    quantity: 1,
    price: props.price,
    maxPrice: props.maxPrice,
  };

  const submitPizza = (e) => {
    addPizzaToCart(itemPizza, sizeChecked.size1, crustChecked.crust1);
    e.preventDefault();
    props.cancel();
    setCrustChecked({ crust1: true, crust2: false });
    setSizeChecked({ size1: true, size2: false });
  };

  return (
    <form className="form-pizza" onSubmit={submitPizza}>
      <h2 style={{ color: "#0078ae", fontWeight: "bold", textAlign: "left" }}>
        CHOOSE PIZZA SIZE:
      </h2>
      <input
        id="medium"
        value="medium"
        name="size"
        type="radio"
        checked={sizeChecked.size1}
        onChange={onCheckSizeChange}
      />
      <label htmlFor="medium">Medium ({props.price + ".000Đ"})</label>
      <br />
      <br />

      <input
        id="large"
        value="large"
        name="size"
        type="radio"
        checked={sizeChecked.size2}
        onChange={onCheckSizeChange}
      />
      <label htmlFor="large">Large ({props.maxPrice + ".000Đ"})</label>

      <h2 style={{ color: "#0078ae", fontWeight: "bold" }}>
        CHOOSE PIZZA CRUST:
      </h2>
      <input
        id="thin"
        value="thin"
        name="crust"
        type="radio"
        checked={crustChecked.crust1}
        onChange={onCheckCrustChange}
      />
      <label htmlFor="thin">Thin crust</label>
      <br />
      <br />

      <input
        id="thick"
        value="thick"
        name="crust"
        type="radio"
        checked={crustChecked.crust2}
        onChange={onCheckCrustChange}
      />
      <label htmlFor="thick">Thick crust</label>
      <br />
      <br />

      <div style={{display:'flex', justifyContent:'center'}}>
        <button type="submit">ADD TO CART</button>
      </div>
    </form>
  );
};

const ModalPizza = (props) => {
  const showModal = props.location.state && props.location.state.isShowModal ? props.location.state.isShowModal : props.show 
  const pizza = props.location.state && props.location.state.pizza ? props.location.state.pizza : props.pizza
  return (
    <>
      <div
        className="backdrop"
        style={{
          display: showModal ? "block" : "none",
          opacity: showModal ? "1" : "0",
        }}
      ></div>

      <div
        className="modal"
        style={{
          display: showModal ? "block" : "none",
          opacity: showModal ? "1" : "0",
        }}
      >
        <div className="pizza-details">
          
            <button className="remodal-close" onClick={props.clicked} />
          
          <div className="pizza-info">
            <h1 style={{textAlign:'center'}}>{pizza.name}</h1>
            <h3 style={{textAlign:'justify'}}>{pizza.description}</h3>
            <div>
              <img
                className="pizza-img"
                src={`https://drive.google.com/uc?export=view&id=${pizza.imgLink}`}
                alt=""
              ></img>
            </div>
            <h2 style={{ textAlign: "center" }}>
              {pizza.price + ".000Đ - "}
              {pizza.maxPrice + ".000Đ"}
            </h2>
          </div>

          <div className="pizza-customize">
            <PizzaForm
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              maxPrice={pizza.maxPrice}
              cancel={props.clicked}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ModalPizza);
