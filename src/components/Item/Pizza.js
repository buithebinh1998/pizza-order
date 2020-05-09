import React, { useState, useEffect } from "react";
import "./Item.css";
import LazyLoad from "react-lazyload";
import Spinner from "../../UI/LoadingPage/Spinner";
import PizzaModal from "../../UI/Modal/Modal";
import { withRouter } from "react-router-dom";
import axios from "axios";

const DataPizza = props => {
  const [pizzaRequest, setPizzaRequest] = useState({
    loading: false,
    dataPizza: null
  });

  const NewSpinner = () => {
    return (
      <div className="item">
        <Spinner />
      </div>
    );
  };
  const [openModal, setOpenModal] = useState(false);

  const [pizzaModal, setPizzaModal] = useState({
    name: "",
    desc: "",
    price: "",
    maxPrice: "",
    imgLink: "17f9EUTfdk6cAqa0JTZLTV4iAcfRvZTre" //set initial
  });

  useEffect(() => {
    setPizzaRequest({ loading: false });
    axios
      .get(
        "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/1",
        { crossdomain: true }
      )
      .then(response => {
        setPizzaRequest({
          loading: true,
          dataPizza: response.data.products
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const { loading, dataPizza } = pizzaRequest;

  const openModalButton = item => {
    const { history } = props;
    setOpenModal(true);
    setPizzaModal({
      id: item.id,
      name: item.name,
      desc: item.description,
      price: item.price,
      maxPrice: item.maxPrice,
      imgLink: item.imgLink
    });
    const { id, name, desc, price, maxPrice, imgLink } = item;

    history.push({
      pathname: `/pizza/${item.id}`,
      state: {
        isShowModal: true,
        pizza: {
          id,
          name,
          desc,
          price,
          maxPrice,
          imgLink
        }
      }
    });
  };

  const closeModal = () => {
    const {history} = props;
    setOpenModal(false);
    history.push({
      pathname: '/pizza',
      state: {
        isShowModal: false
      }
    })
  };

  const Post = ({ id, name, imgLink, price, maxPrice, item }) => (
    <>
      <div
        className="item"
        style={{ cursor: "pointer" }}
        key={id}
        onClick={() => openModalButton(item)}
      >
        <div className="item-name">{name}</div>
        <LazyLoad once={true} placeholder={<NewSpinner />}>
          <div className="item-img">
            <img
              src={`https://drive.google.com/uc?export=view&id=${imgLink}`}
              alt=""
            />
          </div>
        </LazyLoad>
        <div className="item-price">
          {price + ".000Đ - "}
          {maxPrice + ".000Đ"}
        </div>

        <button onClick={() => openModalButton(item)}>VIEW DETAILS</button>
      </div>
    </>
  );

  const loadDataPizza = loading ? (
    dataPizza.map(item => {
      return (
        <LazyLoad
          key={item.id}
          height={200}
          offset={[-200, 200]}
          placeholder={<NewSpinner />}
        >
          <Post key={item.id} item={item} {...item} />
        </LazyLoad>
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

export default withRouter(DataPizza);
