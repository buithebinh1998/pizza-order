import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Promotion from '../../components/Promotion/Promotion'
import backgroundPromotion from '../../assets/img/bg.png'
import '../../styles/globalStyle.css'
const PromotionPage = () => {
    return(
        <div style={{backgroundImage:`url(${backgroundPromotion})`}}>
            <Header/>
            <div class="spacer"></div>
            <Promotion/>
            <Footer/>
        </div>
    )
}

export default PromotionPage;