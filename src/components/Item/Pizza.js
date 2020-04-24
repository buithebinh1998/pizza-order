import React, {useState, useEffect} from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';

const DataPizza = () => {
    const [dataPizza, setDataPizza] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [nameModal, setNameModal] = useState("");
    const [descModal, setDescModal] = useState("");
    const [priceModal, setPriceModal] = useState("");

    useEffect( () => {
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/pizzas','GET', null).then(response =>{
            setDataPizza(response.data);
            setLoading(true);
        });
    });

    const openModalButton = (item) => {
        setOpenModal(true);
        setNameModal(item.name);
        setDescModal(item.desc);
        setPriceModal(item.price);
        console.log(item);
    }

    const loadDataPizza = loading ? dataPizza.map(item => {
        return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <button onClick={() => openModalButton(item)}>VIEW DETAILS</button>
            </div>
        )
    }):<Spinner/>;

    return (
        <>
        {loadDataPizza}
        </>
    )
}

export default DataPizza;
