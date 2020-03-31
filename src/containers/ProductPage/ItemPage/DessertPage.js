import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import imgPizza2 from '../../../assets/img/slider3.jpg'
import imgPizza1 from '../../../assets/img/slider2.jpg'

import NavProduct from '../NavProduct/NavProduct'
class DessertPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <img src={imgPizza1} style={{width:"50%", height:"50%"}}/>
                <img src={imgPizza2} style={{width:"50%", height:"50%"}}/>
                <NavProduct/>
                <div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DessertPage;