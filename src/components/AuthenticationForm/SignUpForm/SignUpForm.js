import React from 'react'
import '../AuthForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
const SignUpForm = ({values, isSubmitting}) => {
    return(
        <Form className="form-auth">
            <h2>SIGN UP</h2>
            <h3>LOGIN INFORMATION</h3>
            <label>EMAIL:</label>
                <Field className="input-field" type="email" name="email" placeholder="Email"/>
                <div className="error-message"><ErrorMessage name="email"/></div>

            <label>PASSWORD:</label>
                <Field className="input-field" type="password" name="password" placeholder="Password"/>
                <div className="error-message"><ErrorMessage name="password"/></div>
    
            <label>CONFIRM PASSWORD:</label>
                <Field className="input-field" type="password" name="confirmPassword"  placeholder="Confirm password"/>
                <div className="error-message"><ErrorMessage name="confirmPassword"/></div>
            <hr/>

            <h3>ACCOUNT INFORMATION</h3>
            <label>PHONE NUMBER:</label>
                <Field className="input-field" type="phone" name="phone" id="phone"  placeholder="Phone number"/>
                <div className="error-message"><ErrorMessage name="phone"/></div>

            <label>FIRST NAME:</label>
                <Field className="input-field" type="text" name="firstName" placeholder="First name"/>
                <div className="error-message"><ErrorMessage name="firstName"/></div>

            <label>LAST NAME:</label>
                <Field className="input-field" type="text" name="lastName" placeholder="Last name"/>
                <div className="error-message"><ErrorMessage name="lastName"/></div>

            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    )
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikSignUpForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            firstName: '',
            lastName: '',
        }
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid!')
            .required('Email is required!'),
        password: Yup.string()
            .min(8, "Password must be 8 characters or longer!")
            .required("Password is required!"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match!"
        ),
        firstName: Yup.string()
            .max(70, 'Last name is too long!')
            .required('First name is required'),
        lastName: Yup.string()
            .max(70, 'Last name is loo long!')
            .required('Last name is required!'),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid!")
            .min(10, 'Your phone number is too short!')
            .max(13, 'Your phone number is too long!')
            .required('Phone number is required!'),
    }),

    handleSubmit: (values, {resetForm, setErrors ,setSubmitting}) => {
        setTimeout(() => {
            if(values.email==="buithebinh1998@gmail.com") setErrors({email:'This email has been taken!'});
            else {
                console.log(values);
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
    }

})(SignUpForm)

export default FormikSignUpForm;