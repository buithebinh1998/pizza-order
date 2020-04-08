import React from 'react'
import './RegisterForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field, ErrorMessage} from 'formik'
const RegisterForm = ({values}) => {
    return(
        <Form className="form-register">
            <h1>SIGN UP</h1>
            <h2>LOGIN INFORMATION</h2>
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

            <h2>ACCOUNT INFORMATION</h2>
            <label>PHONE NUMBER:</label>
                <Field className="input-field" type="phone" name="phone" id="phone"  placeholder="Phone number"/>
                <div className="error-message"><ErrorMessage name="phone"/></div>

            <label>FIRST NAME:</label>
                <Field className="input-field" type="text" name="firstName" placeholder="First name"/>
                <div className="error-message"><ErrorMessage name="firstName"/></div>

            <label>LAST NAME:</label>
                <Field className="input-field" type="text" name="lastName" placeholder="Last name"/>
                <div className="error-message"><ErrorMessage name="lastName"/></div>

            <div className="checkbox-field">
                <label style={{marginRight:'10px'}}>GENDER:</label>
                    <Field type="checkbox" name="male" checked={values.male} />
                    <label htmlFor="male" style={{marginRight:'10px'}}>Male</label>
                    
                    <Field type="checkbox" name="female" checked={values.female}/>
                    <label htmlFor="female" style={{marginRight:'10px'}}>Female</label>

                    <Field type="checkbox" name="other" checked={values.other}/>
                    <label htmlFor="other" style={{marginRight:'10px'}}>Other</label>
            </div>
            

            <button type="submit">Submit</button>
        </Form>
    )
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikRegisterForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            firstName: '',
            lastName: '',
            male: false,
            female: false,
            other: false,
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

    handleSubmit(values){
        console.log(values);
    }

})(RegisterForm)

export default FormikRegisterForm;