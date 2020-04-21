import React, { Component } from 'react'
import './Item.css'
//import {dataPizza} from '../../data/dataPizza'
import axios from 'axios'

class DataPizza extends Component{
    constructor(props){
        super(props);
        this.state={
            dataPizza: []
        };
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'https://5e9e6c40fb467500166c3f72.mockapi.io/api/v1/pizzas',
            data: null
        }).then(res =>{
            this.setState({dataPizza:res.data});
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        const {dataPizza} = this.state;

        const loadDataPizza = dataPizza.map(item => {
            return(
            <div className="item" key={item.id}>
                <img className="item-img" src={`https://drive.google.com/uc?export=view&id=${item.imgLink}`} alt=""/>
                <div className="item-name">{item.name}</div>
                <div className="item-desc">{item.desc}</div>
                <div className="item-price">{item.price}</div>
                <button>ADD TO CART</button>
            </div>
            )
        });

        return (
            <>
            {loadDataPizza}
            </>
        )
    }
}

export default DataPizza;
