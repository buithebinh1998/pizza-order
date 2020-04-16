import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'
import {loadDataSideDish} from '../../../components/Item/SideDish'
import NavProduct from '../NavProduct/NavProduct'
import './ItemPage.css'

class SideDishPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div class="spacer"></div>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}} alt=""/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}} alt=""/>
                <NavProduct/>
                <div className="item-container">
                    {loadDataSideDish}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SideDishPage;