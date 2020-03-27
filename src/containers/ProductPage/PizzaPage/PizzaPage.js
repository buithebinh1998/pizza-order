import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import './PizzaPage.css'
import NavProduct from '../NavProduct/NavProduct'
import Pizza from '../../../components/Product/Pizza/Pizza'
import imgPizza from '../../../assets/imgPizza/hawaii-full.png';
class PizzaPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}}/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}}/>
                <NavProduct/>
                <div className="pizza-container">
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                    <Pizza img={imgPizza} name="Hawaii Pizza" desc="Best Pizza" price="199.000Đ - 299.000Đ"/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PizzaPage;