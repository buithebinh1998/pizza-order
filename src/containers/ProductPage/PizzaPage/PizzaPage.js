import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import './PizzaPage.css'
import NavProduct from '../NavProduct/NavProduct'
import {loadDataPizza} from '../../../components/Product/Pizza/Pizza'
class PizzaPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}}/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}}/>
                <NavProduct/>
                <div className="pizza-container">
                    {loadDataPizza}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PizzaPage;