import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import SignUpForm from '../../../components/AuthenticationForm/SignUpForm/SignUpForm'
import backgroundAuthen from '../../../assets/img/bg.png'


class SignUpPage extends Component{
    render(){
        return(
            <div style={{backgroundImage:`url(${backgroundAuthen})`}}>
                <Header/>
                <div class="spacer"></div>
                <SignUpForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignUpPage;