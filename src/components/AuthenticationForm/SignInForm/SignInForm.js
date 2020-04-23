import React from 'react'
import '../AuthForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
import {NavLink} from 'react-router-dom'
import callApi from './../../../utils/callApi'
import swal from 'sweetalert'
const SignInForm = ({values, isSubmitting}) => {
    return(
        <Form className="form-auth"> 
            <h2>SIGN IN</h2>
            <h3>Please enter your email and password</h3>
            <label>EMAIL:</label>
                <Field className="input-field" type="email" name="email" placeholder="Email"/>
                <div className="error-message"><ErrorMessage name="email"/></div>

            <label>PASSWORD:</label>
                <Field className="input-field" type="password" name="password" placeholder="Password"/>
                <div className="error-message"><ErrorMessage name="password"/></div>

            <button type="submit" disabled={isSubmitting}>Sign In</button>
            <div className="sign-up">Don't have account? <NavLink to = '/signup'>Sign Up.</NavLink></div>
            <div className="sign-up">Forget your password? <NavLink to = '/signup'>Click here.</NavLink></div>
        </Form>
    )
}

const FormikSignInForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: ''
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('Email is required!'),
        password: Yup.string()
            .required("Password is required!"),
    }),

    handleSubmit(values, {setErrors, props, resetForm, setSubmitting}){
        let errors="";
        callApi('https://5ea10ddbeea7760016a923e2.mockapi.io/api/v1/signin-authentication','GET', null).then(response =>{
            errors = response.data[0].errorCode;
        });

        setTimeout(() => {
            if(errors !== "404"){
                swal({
                    title: "SIGN UP FAILED",
                    text: "Please check your information!",
                    icon: "error",
                })
                setErrors({email:'This email has been taken!'});
            }
            else {
                swal({
                    title: "SIGN UP SUCCESFULLY!",
                    text: "You are now ready to use Pycozza.",
                    icon: "success",
                    button: "Done!"
                });

                resetForm();
            }
            setSubmitting(false);
        }, 2000);
    }

})(SignInForm)

export default FormikSignInForm;