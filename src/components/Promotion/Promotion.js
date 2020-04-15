import React from 'react'
import './Promotion.css'
import {NavLink} from 'react-router-dom'
import promotion1 from '../../assets/img/promotion1.png'
import promotion2 from '../../assets/img/promotion2.png'
const Promotion = () => {
    return(
        <div>
            <h1>PROMOTION</h1>
            <div className="promotion-list">
                <div className="promotion-item">

                    <div className="promotion-image">
                        <img src={promotion1} alt=""/>
                    </div>

                    <div className="promotion-detail">
                        <h2 className="promotion-name"> 50% OFF FOR SECOND PIZZA - ALL WEEK</h2>
                        <div className="promotion-description">
                            * Applied when buying pizza 9 "/ 12" with same size.<br/>
                            * Free 30' delivery with orders from VND 100,000 within delivery range.<br/>
                        </div>
                        <NavLink to ='/category/pizza'><button className="promotion-button">ORDER NOW</button></NavLink>
                    </div>

                </div>

                <div className="promotion-item">

                    <div className="promotion-image">
                        <img src={promotion2} alt=""/>
                    </div>

                    <div className="promotion-detail">
                        <h2 className="promotion-name">DELICIOUS MEALS FOR CHILDREN</h2>
                        <div className="promotion-description">
                            * Combo 129,000đ include: 1 Kid Mania Pizza 9'' + 1 Sausage + 1 Coca.<br/>
                            * Free 30' delivery with this order within delivery range.<br/>
                        </div>
                        <NavLink to ='/category/pizza'><button className="promotion-button">ORDER NOW</button></NavLink>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Promotion;