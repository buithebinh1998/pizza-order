import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ProductPage.css'
import pizza from '../../assets/img/pizza.jpg'
import beverage from '../../assets/img/beverage.png'
import dessert from '../../assets/img/dessert.jpg'
import sidedish from '../../assets/img/sidedish.jpg'
import {NavLink} from 'react-router-dom'
const productPage = () => {
    return(
        <div>
            <Header/>
            <div className="product-page">
                <div className="product-category" style={{backgroundImage:`url(${pizza})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"} }>
                    <div>PIZZA</div>
                    <NavLink to='/pizzapage'><button>SEE MORE</button></NavLink> 
                </div>
                <div className="product-category" style={{backgroundImage:`url(${sidedish})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>SIDE DISH</div>
                    <NavLink to='/sidedishpage'><button>SEE MORE</button></NavLink> 
                </div>
                <div className="product-category" style={{backgroundImage:`url(${beverage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>BEVERAGE</div>
                    <NavLink to='/sidedishpage'><button>SEE MORE</button></NavLink>
                </div>
                <div className="product-category" style={{backgroundImage:`url(${dessert})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>DESSERT</div>
                    <NavLink to='/sidedishpage'><button>SEE MORE</button></NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default productPage;