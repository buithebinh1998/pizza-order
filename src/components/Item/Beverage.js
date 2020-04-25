import React, {useState, useEffect} from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';

const DataBeverage = () => {
    const [dataBeverage, setDataBeverage] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect( () => {
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/beverages','GET', null).then(response =>{
            setDataBeverage(response.data);
            setLoading(true);
        });
    })

    const loadDataBeverage = loading ? dataBeverage.map(item => {
        return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <button>ADD TO CART</button>
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
