import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import RegisterForm from '../../../components/AuthenticationForm/RegisterForm/RegisterForm'
import backgroundRegister from '../../../assets/img/backgroundRegister.jpg'
class RegisterPage extends Component{
    render(){
        return(
            <div style={{backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover'}}>
                <Header/>
                <RegisterForm/>
                <Footer/>
            </div>
        )
    }
}

export default RegisterPage;