import React from 'react'
import './LoginForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
const LoginForm = ({values}) => {
    return(
        <Form className="form-login">
            <h1>SIGN IN</h1>
            <h2>Please enter your email and password</h2>
            <label>EMAIL:</label>
                <Field className="input-field" type="email" name="email" placeholder="Email"/>
                <div className="error-message"><ErrorMessage name="email"/></div>

            <label>PASSWORD:</label>
                <Field className="input-field" type="password" name="password" placeholder="Password"/>
                <div className="error-message"><ErrorMessage name="password"/></div>

            <button type="submit">Login</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '',
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('Email is required!'),
        password: Yup.string()
            .required("Password is required!"),
    }),

    handleSubmit(values){
        console.log(values);
    }

})(LoginForm)

export default FormikLoginForm;