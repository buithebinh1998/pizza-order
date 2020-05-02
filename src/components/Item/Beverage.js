import React, {useState, useEffect, useContext} from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';
import { Context } from '../../context/Context/Context';

const DataBeverage = () => {
    const [dataBeverage, setDataBeverage] = useState([]);
    const [loading, setLoading] = useState(false);
    const {addToCart} = useContext(Context);

    useEffect( () => {
        callApi('https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/4','GET', null).then(response =>{
            setDataBeverage(response.data.products);
            setLoading(true);
        });
        // callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/beverages','GET', null).then(response =>{
        //     setDataBeverage(response.data);
        //     setLoading(true);
        // });
    })

    const loadDataBeverage = loading ? dataBeverage.map(item => {
        return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price+".000Đ"}</div>
                <button onClick={(e) => {addToCart(item); e.preventDefault();}}>
                    ADD TO CART
                </button>
            </div>
        )
    }):<Spinner/>;

    return (
        <>
        {loadDataBeverage}
        </>
    )
}

export default DataBeverage;
