import React, {useState, useEffect, useContext} from 'react'
import './Item.css'
import callApi from '../../utils/callApi'
import Spinner from '../../UI/LoadingPage/Spinner';
import { Context } from '../../context/Context/Context';
import swal from 'sweetalert'


const DataSideDish = () => {
    const [dataSideDish, setDataSideDish] = useState([]);
    const [loading, setLoading] = useState(false);
    const [context, setContext] = useContext(Context);

    useEffect( () => {
        callApi('https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/sidedishes','GET', null).then(response =>{
            setDataSideDish(response.data);
            setLoading(true);
        });
    })

    const findItemInCart = (cart, item) => { 
        let index = -1;
        if(cart.length>0){
            for(let i=0; i<cart.length; i++){
                if(cart[i].name === item.name) index=i;
            }
        }
        return index;
    }

    const addToCart = (item) => {
        let result = {
            name: item.name,
            quantity: 1,
            price: item.price,
        };
        
        result.price = result.price.slice(0, result.price.length - 5) *1000;

        swal({
            title: "Add to cart successfully!",
            icon: "success",
            button: "OK!"
        });

        const newCart = [...context.cart];
        const index = findItemInCart(context.cart, result);

        if(index===-1){
            newCart.push(result);
            setContext({cart:newCart});
        }
        else{
            newCart[index].quantity += 1;
            setContext({cart:newCart});
        }
  
    };

    const loadDataSideDish = loading ? dataSideDish.map(item => {
        return(
            <div className="item" key={item.id}>
                <div className="item-img">
                    <img src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <button onClick={(e) => {addToCart(item); e.preventDefault();}}>ADD TO CART</button>
            </div>
        )
    }):<Spinner/>;

    return (
        <>
        {loadDataSideDish}
        </>
    )
}

export default DataSideDish;
