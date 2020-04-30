import React, {useState, useContext} from 'react'
import './Modal.css'
import {Context} from '../../context/Context/Context'
import { NavLink } from 'react-router-dom';

const PizzaForm = (props) => {
    const {addPizzaToCart} = useContext(Context);

    const [sizeChecked, setSizeChecked] = useState({size1:true, size2:false});
    const [crustChecked, setCrustChecked] = useState({crust1:true, crust2:false});

    const onCheckSizeChange = (event) => {
        if(event.target.value === "medium") setSizeChecked({size1: true, size2: false});
        else setSizeChecked({size1: false, size2: true});
    }

    const onCheckCrustChange = (event) => {
        if(event.target.value === "thin") setCrustChecked({crust1: true, crust2: false});
        else setCrustChecked({crust1: false, crust2: true});
    }

    const itemPizza = {
        name: props.name,
        quantity: 1,
        price: props.price,
        maxPrice: props.maxPrice
    }

    return(
        <form className="form-pizza" onSubmit={(e) => {addPizzaToCart(itemPizza,sizeChecked.size1,crustChecked.crust1); e.preventDefault(); props.cancel()}}>
            <h2 style={{color:'#0078ae', fontWeight:'bold', textAlign:'left'}}>CHOOSE PIZZA SIZE:</h2>
            <input id="medium" value="medium" name="size" type="radio" checked={sizeChecked.size1} onChange={onCheckSizeChange}/>
            <label htmlFor="medium">Medium</label><br/><br/>

            <input id="large" value="large" name="size" type="radio" checked={sizeChecked.size2} onChange={onCheckSizeChange}/>
            <label htmlFor="large">Large</label>

            <h2 style={{color:'#0078ae', fontWeight:'bold'}}>CHOOSE PIZZA CRUST:</h2>
            <input id="thin" value="thin" name="crust" type="radio" checked={crustChecked.crust1} onChange={onCheckCrustChange}/>
            <label htmlFor="thin">Thin crust</label><br/><br/>

            <input id="thick" value="thick" name="crust" type="radio" checked={crustChecked.crust2} onChange={onCheckCrustChange}/>
            <label htmlFor="thick">Thick crust</label><br/><br/>
        
            <button type="submit">ADD TO CART</button>
        </form>
    )
}

const ModalPizza = (props) => {
    return(
        <>
        <div className="backdrop" style={{
            display: props.show ? "block" : "none",
            opacity: props.show ? "1" : "0"
          }}
        >
        </div>   

        <div className="modal" style={{
            display: props.show ? "block" : "none",
            opacity: props.show ? "1" : "0"
          }}
        >
            <div className="pizza-details">
                <NavLink to='/pizza'><button className="remodal-close" onClick={props.clicked}/></NavLink>
                <div className="pizza-info">
                    <h1>{props.pizza.name}</h1>
                    <h3>{props.pizza.desc}</h3>
                    <div>
                        <img className="pizza-img" src={`https://drive.google.com/uc?export=view&id=${props.pizza.imgLink}`} alt=""></img>
                    </div>
                    <h2 style={{textAlign:'center'}}>{props.pizza.price+".000Đ - "}{props.pizza.maxPrice+".000Đ"}</h2>
                </div>

                <div className="pizza-customize">
                    <PizzaForm id={props.pizza.id} name={props.pizza.name} price={props.pizza.price} maxPrice={props.pizza.maxPrice} cancel={props.clicked}/>
                </div>
                
            </div>
        </div>
        </>
    )
}  

export default ModalPizza;