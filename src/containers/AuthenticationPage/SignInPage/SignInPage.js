import React, { Component } from 'react'
import SignInForm from '../../../components/AuthenticationForm/SignInForm/SignInForm'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
class SignInPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: 'rgba(0, 123, 255, 0.09)'}}>
                <Header/>
                <SignInForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignInPage;