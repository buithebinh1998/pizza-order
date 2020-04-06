import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import RegisterForm from '../../../components/AuthenticationForm/RegisterForm/RegisterForm'
class RegisterPage extends Component{
    render(){
        return(
            <div style={{backgroundColor: 'rgba(0, 123, 255, 0.09)'}}>
                <Header/>
                <RegisterForm/>
                <Footer/>
            </div>
        )
    }
}

export default RegisterPage;