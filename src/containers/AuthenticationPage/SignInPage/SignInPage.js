import React, { Component } from 'react'
import SignInForm from '../../../components/AuthenticationForm/SignInForm/SignInForm'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import backgroundAuthen from '../../../assets/img/bg.png'

class SignInPage extends Component{
    render(){
        return(
            <div style={{backgroundImage:`url(${backgroundAuthen})`}}>
                <Header/>
                <div class="spacer"></div>
                <SignInForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignInPage;