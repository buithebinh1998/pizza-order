import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ProductPage.css'
import pizza from '../../assets/img/pizza.jpg'
import beverage from '../../assets/img/beverage.png'
import dessert from '../../assets/img/dessert.jpg'
import sidedish from '../../assets/img/sidedish.jpg'
import {NavLink} from 'react-router-dom'
import '../../styles/globalStyle.css'
const productPage = () => {
    return(
        <div>
            <Header/>
            <div class="spacer"></div>
            <div className="product-page">
                <div className="product-category" style={{backgroundImage:`url(${pizza})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"} }>
                    <div>PIZZA</div>
                    <NavLink to='/category/pizza'><button>SEE MORE</button></NavLink> 
                </div>
                <div className="product-category" style={{backgroundImage:`url(${sidedish})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>SIDE DISH</div>
                    <NavLink to='/category/sidedish'><button>SEE MORE</button></NavLink> 
                </div>
                <div className="product-category" style={{backgroundImage:`url(${beverage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>BEVERAGE</div>
                    <NavLink to='/category/beverage'><button>SEE MORE</button></NavLink>
                </div>
                <div className="product-category" style={{backgroundImage:`url(${dessert})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>DESSERT</div>
                    <NavLink to='/category/dessert'><button>SEE MORE</button></NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default productPage;