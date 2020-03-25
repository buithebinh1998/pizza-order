import React from 'react'
import './Footer.css'
import tel from '../../assets/img/tel.png'
import visa from '../../assets/img/visa.png'
const Footer = () => (
    <footer>
        <div>&copy; 2020 PYCOZZA VIETNAM COMPANY</div>
        <span>|</span>
        <div>PRIVACY POLICY</div>
        <div className="hotline">
            <div>HOTLINE</div>
            <div>DELIVERY</div>
        </div>
        <img src={tel} alt=""/>
        <img className="img-corner" src={visa} alt=""/>
    </footer>
)
export default Footer;