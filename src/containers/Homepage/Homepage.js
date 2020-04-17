import React from 'react'
import Header from '../../components/Header/Header'
import Carosel from '../../components/Carosel/Carosel'
import Footer from '../../components/Footer/Footer'
import './Homepage.css'
import category from '../../assets/img/category.jpg'
import promotion from '../../assets/img/promotion.jpg'
import voucher from '../../assets/img/voucher.jpg'
import {NavLink} from 'react-router-dom'

const Homepage = () => {
    return(
        <div>
            <Header/>
            <div id="spacer"></div>
            <Carosel/>
            <div className="homepage">
                <div>
                    <img src={promotion} alt=""/>
                    <div>PROMOTION</div>
                    <NavLink to='/promotion'>
                        <button>SEE NOW</button>
                    </NavLink>
                </div>
                <div>
                    <img src={category} alt=""/>
                    <div>CATEGORY</div>
                    <NavLink to='/category'>
                        <button>SEE NOW</button>
                    </NavLink>
                </div>
                <div>
                    <img className="img-blur" src={voucher} alt=""/>
                    <div>VOUCHER</div>
                    <input type="text" placeholder="Enter your voucher code"/>
                    <button>CONFIRM</button>
                </div>
            </div>
            <Footer/>
        </div>    
    )
}

export default Homepage;