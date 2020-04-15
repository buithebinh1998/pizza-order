import React from 'react'
import './Item.css'
import {dataPizza} from '../../data/dataPizza'
export const loadDataPizza = dataPizza.map(item => {
        return(
        <div className="item" key={item.id}>
            <img className="item-img" src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
            <div className="item-name">{item.name}</div>
            <div className="item-desc">{item.desc}</div>
            <div className="item-price">{item.price}</div>
            <button>ADD TO CART</button>
        </div>
        )
    } 
);
