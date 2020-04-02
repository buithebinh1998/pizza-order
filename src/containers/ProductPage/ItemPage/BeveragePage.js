import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import {loadDataBeverage} from '../../../components/Item/Beverage'
import NavProduct from '../NavProduct/NavProduct'
import './ItemPage.css'
class BeveragePage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}} alt=""/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}} alt=""/>
                <NavProduct/>
                <div className="item-container">
                    {loadDataBeverage}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BeveragePage;