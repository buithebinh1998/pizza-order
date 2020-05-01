import React, {useState, useEffect} from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';
import PizzaModal from '../../UI/Modal/Modal'
import { NavLink } from 'react-router-dom';

const DataPizza = () => {
    const [dataPizza, setDataPizza] = useState([]);
    const [loading, setLoading] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const [pizzaModal, setPizzaModal] = useState({
        name: "",
        desc: "",
        price: "",
        maxPrice: "",
        imgLink: "17f9EUTfdk6cAqa0JTZLTV4iAcfRvZTre" //set initial
    });

    useEffect( () => {
        // callApi('https://ec2-52-221-224-159.ap-southeast-1.compute.amazonaws.com:8080/pycozza/product/1','GET', null).then(response =>{
        //     setDataPizza(response.data.products);
        //     setLoading(true);
        // });
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/pizzas','GET', null).then(response =>{
            setDataPizza(response.data);
            setLoading(true);
        });
    });

    const openModalButton = (item) => {
        setOpenModal(true);
        setPizzaModal({
            id: item.id,
            name: item.name,
            desc: item.description,
            price: item.price,
            maxPrice: item.maxPrice,
            imgLink: item.imgLink
        });
    }
    
    const closeModal = () => {
        setOpenModal(false);
    }

    const loadDataPizza = loading ? dataPizza.map(item => {
        return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price+".000Đ - "}{item.maxPrice+".000Đ"}</div>
                <NavLink className="item-navlink" to={`/pizza/${item.id}`}><button onClick={() => openModalButton(item)}>VIEW DETAILS</button></NavLink>
            </div>
        )
    }):<Spinner/>;

    return (
        <>
        <PizzaModal clicked={closeModal} show={openModal} pizza={pizzaModal}/>
        {loadDataPizza}
        </>
    )
}

export default DataPizza;
