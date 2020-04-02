import React from 'react'
import './Item.css'
import {dataBeverage} from '../../data/dataBeverage'
export const loadDataBeverage = dataBeverage.map(item => {
        return(
        <div className="item">
            <img className="item-img" src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
            <div className="item-name" style={{top:'65%'}}>{item.name}</div>
            <div className="item-price" style={{top:'75%'}}>{item.price}</div>
            <button style={{top:'85%'}}>ADD TO CART</button>
        </div>
        )
    } 
);