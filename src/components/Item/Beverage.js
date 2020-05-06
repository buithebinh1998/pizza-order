import React, {useState, useEffect, useContext} from 'react'
import './Item.css'
import axios from 'axios'
import Spinner from '../../UI/LoadingPage/Spinner';
import { Context } from '../../context/Context/Context';

const DataBeverage = () => {
    const [dataBeverage, setDataBeverage] = useState([]);
    const [loading, setLoading] = useState(false);
    const {addToCart} = useContext(Context);

    useEffect( () => {
        let mounted = true;
        if(mounted){
            axios.get('https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/4', {crossdomain:true})
            .then(response =>{
                setDataBeverage(response.data.products);
                setLoading(true);
            })
            .catch(error => {
                console.log(error);
            });
        }
        return () => mounted = false;
    }, [])

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
