import React from 'react'
import './Pizza.css'
import {dataPizza} from '../../../data/dataPizza'
export const loadDataPizza = dataPizza.map(item => {
        return(
        <div className="pizza">
            <img className="pizza-img" src={item.img} alt=""/>
            <div className="pizza-name">{item.name}</div>
            <div className="pizza-desc">{item.desc}</div>
            <div className="pizza-price">{item.price}</div>
            <button>ADD TO CART</button>
        </div>
        )
    } 
);
