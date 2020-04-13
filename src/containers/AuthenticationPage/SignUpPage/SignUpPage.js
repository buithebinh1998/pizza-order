import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import SignUpForm from '../../../components/AuthenticationForm/SignUpForm/SignUpForm'
class SignUpPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: 'rgba(0, 123, 255, 0.09)'}}>
                <Header/>
                <SignUpForm/>
                <Footer/>
            </div>
        )
    }
}

export default SignUpPage;