import React, { useState, useEffect, useContext } from "react";
import "./Item.css";
import axios from "axios";
import Spinner from "../../UI/LoadingPage/Spinner";
import { Context } from "../../context/Context/Context";
import LazyLoad from 'react-lazyload'
const DataBeverage = () => {
  const [dataBeverage, setDataBeverage] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(Context);
  const NewSpinner = () => { return(<div className="item"><Spinner/></div>)}
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios
        .get(
          "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/4",
          { crossdomain: true }
        )
        .then((response) => {
          setDataBeverage(response.data.products);
          setLoading(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => (mounted = false);
  }, []);

  const Post = ({id, name, imgLink, price, item}) => (
    <>
      <div className="item" key={id}>
        <div className="item-name">{name}</div>
        <LazyLoad once={true} placeholder={<NewSpinner/>}>
          <div className="item-img">
            <img
              src={`https://drive.google.com/uc?export=view&id=${imgLink}`}
              alt=""
            />
          </div>
        </LazyLoad>
        <div className="item-price">
          {price + ".000Đ"}
        </div>

        <button
            onClick={(e) => {
              addToCart(item);
              e.preventDefault();
            }}
          >
            ADD TO CART
          </button>
      </div>
    </>
  );

  const loadDataBeverage = loading ? (
    dataBeverage.map((item) => {
      return (
        <LazyLoad
          key={item.id}
          height={200}
          offset={[-200, 200]}
          placeholder={<NewSpinner/>}
        >
          <Post key={item.id} item={item} {...item} />
        </LazyLoad>
      );
    })
  ) : (
    <Spinner/>
  );


  
  return <>{loadDataBeverage}</>;
};

export default DataBeverage;
