import React, { Component } from 'react'
import LoginForm from '../../../components/AuthenticationForm/LoginForm/LoginForm'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
class LoginPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: 'rgba(0, 123, 255, 0.09)'}}>
                <Header/>
                <LoginForm/>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage;