import React from 'react'
import Header from '../Header/Header'
import Carosel from '../Homepage/Carosel/Carosel'
import Footer from '../Footer/Footer'
import './Homepage.css'
import category from '../../assets/img/category.jpg'
import promotion from '../../assets/img/promotion.jpg'
import voucher from '../../assets/img/voucher.jpg'
const Homepage = () => {
    return(
        <div>
            <Header/>
            <Carosel/>
            <div className="homepage">
                <div>
                    <img src={promotion} alt=""/>
                    <div>PROMOTION</div>
                    <button>SEE MORE</button>
                </div>
                <div>
                    <img src={category} alt=""/>
                    <div>CATEGORY</div>
                    <button>SEE MORE</button>
                </div>
                <div>
                    <img className="img-blur" src={voucher} alt=""/>
                    <div>VOUCHER</div>
                    <button>SEE MORE</button>
                </div>
            </div>
            <Footer/>
        </div>    
    )
}

export default Homepage;