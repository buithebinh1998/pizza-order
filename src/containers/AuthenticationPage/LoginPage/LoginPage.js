import React, { Component } from 'react'
import LoginForm from '../../../components/AuthenticationForm/LoginForm/LoginForm'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
class LoginPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <LoginForm/>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage;