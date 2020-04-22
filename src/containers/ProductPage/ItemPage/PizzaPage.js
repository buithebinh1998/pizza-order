import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import background from '../../../assets/img/bg.png'
import './ItemPage.css'
import NavProduct from '../NavProduct/NavProduct'
import DataPizza from './../../../components/Item/Pizza'
import Cart from '../../../components/Cart/Cart'

class PizzaPage extends Component{
    render(){
        return(
            <div style={{backgroundImage:`url(${background})`}}>
                <Header/>
                <div id="spacer"></div>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}} alt=""/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}} alt=""/>
                <NavProduct/>
                <div className="category-page">
                    <div className="item-container">
                        <DataPizza/>
                    </div>
                    <div className="cart-container">
                        <Cart/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PizzaPage;