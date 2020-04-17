import React, { Component } from 'react'
import SignInForm from '../../../components/AuthenticationForm/SignInForm/SignInForm'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import backgroundAuthen from '../../../assets/img/bg.png'
import './SignInPage.css'

class SignInPage extends Component{
    render(){
        return(
            <div className="SignInPage" style={{backgroundImage:`url(${backgroundAuthen})`, backgroundSize:'cover'}}>
                <Header/>
                <div id="spacer"></div>
                <SignInForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignInPage;