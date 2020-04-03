import React from 'react'
import './RegisterForm.css'
import Yup from 'yup'
import {withFormik, Form, Field} from 'formik'
const RegisterForm = ({values}) => {
    return(
        <Form className="form-register">
            <h1>ACCOUNT REGISTRATION</h1>
            <h2>LOGIN INFORMATION</h2>
            <label for="email">EMAIL:</label>
            <Field className="input-field" type="email" name="email" id="email" placeholder="Email"/>
            <label for="password">PASSWORD:</label>
                <Field className="input-field" type="password" name="password" id="password" placeholder="Password"/>
            
            <label for="confirmpassword">CONFIRM PASSWORD:</label>
            <Field className="input-field" type="password" name="confirmpassword" id="confirmpassword"  placeholder="Confirm password"/>
            
            <hr/>

            <h2>ACCOUNT INFORMATION</h2>
            <label for="phone">PHONE NUMBER:</label>
                <Field className="input-field" type="phone" name="phone" id="phone"  placeholder="Phone number"/>
            
            <label for="firstname">FIRST NAME:</label>
            <Field className="input-field" type="text" name="firstname" id="firstname" placeholder="First name"/>
            
            <label for="lastname">LAST NAME:</label>
            <Field className="input-field" type="text" name="lastname" id="lastname" placeholder="Last name"/>

            <div>
                <label for="gender">GENDER:</label>
                    <Field type="checkbox" name="male"/>Male
                    <Field type="checkbox" name="female"/>Female
                    <Field type="checkbox" name="other"/>Other
            </div>
            

            <button>Submit</button>
        </Form>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '',
            confirmpassword: '',
            phone: '',
            firstname: '',
            lastname: ''
        }
    }

})(RegisterForm)

export default FormikRegisterForm;