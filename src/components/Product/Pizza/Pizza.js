import React from 'react'
import './Pizza.css'

const Pizza = (props) => (
    <div className="pizza">
        <img className="pizza-img" src={props.img}/>
        <div className="pizza-name">{props.name}</div>
        <div className="pizza-desc">{props.desc}</div>
        <div className="pizza-price">{props.price}</div>
        <button>ADD TO CART</button>
    </div>
);

export default Pizza;