import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import './ItemPage.css'
import NavProduct from '../NavProduct/NavProduct'
import {loadDataPizza} from '../../../components/Item/Pizza'

class PizzaPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div id="spacer"></div>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}} alt=""/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}} alt=""/>
                <NavProduct/>
                <div className="item-container">
                    {loadDataPizza}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PizzaPage;