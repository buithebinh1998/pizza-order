import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ProductPage.css'
import pizza from '../../assets/img/pizza.jpg'
import beverage from '../../assets/img/beverage.png'
import dessert from '../../assets/img/dessert.jpg'
import sidedish from '../../assets/img/sidedish.jpg'
const productPage = () => {
    return(
        <div>
            <Header/>
            <div className="product-page">
                <div className="product-category" style={{backgroundImage:`url(${pizza})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"} }>
                    <div>PIZZA</div>
                    <button>SEE MORE</button>
                </div>
                <div className="product-category" style={{backgroundImage:`url(${sidedish})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>SIDE DISH</div>
                    <button>SEE MORE</button>
                </div>
                <div className="product-category" style={{backgroundImage:`url(${beverage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>BEVERAGE</div>
                    <button>SEE MORE</button>
                </div>
                <div className="product-category" style={{backgroundImage:`url(${dessert})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div>DESSERT</div>
                    <button>SEE MORE</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default productPage;