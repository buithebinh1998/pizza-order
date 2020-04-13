import React from 'react'
import './SignInForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
const SignInForm = ({values, isSubmitting}) => {
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

            <button type="submit" disabled={isSubmitting}>Sign In</button>
        </Form>
    )
}

const FormikSignInForm = withFormik({
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

    handleSubmit(values, {setErrors, resetForm, setSubmitting}){
        setTimeout(() => {
            if(values.email!=="buithebinh1998@gmail.com") setErrors({email:'Wrong email or password!'});
            else {
                console.log(values);
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
    }

})(SignInForm)

export default FormikSignInForm;