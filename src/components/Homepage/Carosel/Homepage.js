import React, { Component } from 'react'
import Header from '../Header/Header'
import slider1 from '../../assets/img/slider1.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider3.jpg';
import slider4 from '../../assets/img/slider4.jpg';
class Homepage extends Component {
    
    render(){
        return(
            <div>
                <Header/>
                <div class="slideshow-container">

                    <div class="mySlides fade">
                        <div class="numbertext">1 / 4</div>
                        <img src={slider1} style={{width:"100%"}} alt=""/>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">2 / 4</div>
                        <img src={slider2} style={{width:"100%"}} alt=""/>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">3 / 4</div>
                        <img src={slider3} style={{width:"100%"}} alt=""/>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">4 / 4</div>
                        <img src={slider4} style={{width:"100%"}} alt=""/>
                    </div>

                </div>

                <div style={{textAlign:"center"}}>
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
                </div>
            </div>
        )
    }
}

export default Homepage;