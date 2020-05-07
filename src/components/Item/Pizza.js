import React, { useState, useEffect } from "react";
import "./Item.css";

import Spinner from "../../UI/LoadingPage/Spinner";
import PizzaModal from "../../UI/Modal/Modal";
import {NavLink} from 'react-router-dom'
import axios from "axios";

const DataPizza = () => {
  const [dataPizza, setDataPizza] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const [openModal, setOpenModal] = useState(false);

  const [pizzaModal, setPizzaModal] = useState({
    name: "",
    desc: "",
    price: "",
    maxPrice: "",
    imgLink: "17f9EUTfdk6cAqa0JTZLTV4iAcfRvZTre", //set initial
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios
        .get(
          "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/1",
          { crossdomain: true }
        )
        .then((response) => {
          setDataPizza(response.data.products);
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => (mounted = false);
  }, []);

  const openModalButton = (item) => {
    setOpenModal(true);
    setPizzaModal({
      id: item.id,
      name: item.name,
      desc: item.description,
      price: item.price,
      maxPrice: item.maxPrice,
      imgLink: item.imgLink,
    });
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const loadDataPizza = loading ? (
    dataPizza.map((item) => {
      return (
        <div className="item" key={item.id}>
          <div className="item-img">
            <img
              src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`}
              alt=""
            />
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">
            {item.price + ".000Đ - "}
            {item.maxPrice + ".000Đ"}
          </div>
          
          <NavLink to ={`/pizza/${item.id}`}>
            <button onClick={() => openModalButton(item)}>VIEW DETAILS</button>
          </NavLink>
        </div>
      );
    })
  ) : (
    <Spinner />
  );

  return (
    <>
      <PizzaModal clicked={closeModal} show={openModal} pizza={pizzaModal} />
      {loadDataPizza}
    </>
  );
};

export default DataPizza;
