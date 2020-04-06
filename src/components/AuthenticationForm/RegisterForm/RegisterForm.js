import React from 'react'
import './RegisterForm.css'
import * as Yup from 'yup'
import {withFormik, Form, Field} from 'formik'
const RegisterForm = ({values, errors, touched}) => {
    return(
        <Form className="form-register">
            <h1>ACCOUNT REGISTRATION</h1>
            <h2>LOGIN INFORMATION</h2>
            <label for="email">EMAIL:</label>
                <Field className="input-field" type="email" name="email" id="email" placeholder="Email"/>
                {touched.email && errors.email && <div className="error-message">{errors.email}</div>}

            <label for="password">PASSWORD:</label>
                <Field className="input-field" type="password" name="password" id="password" placeholder="Password"/>
                {touched.password && errors.password && <div className="error-message">{errors.password}</div>}
    
            <label for="confirmpassword">CONFIRM PASSWORD:</label>
                <Field className="input-field" type="password" name="confirmpassword" id="confirmpassword"  placeholder="Confirm password"/>
                {touched.confirmpassword && errors.confirmpassword && <div className="error-message">{errors.confirmpassword}</div>}
            <hr/>

            <h2>ACCOUNT INFORMATION</h2>
            <label for="phone">PHONE NUMBER:</label>
                <Field className="input-field" type="phone" name="phone" id="phone"  placeholder="Phone number"/>
                {touched.phone && errors.phone && <div className="error-message">{errors.phone}</div>}

            <label for="firstname">FIRST NAME:</label>
                <Field className="input-field" type="text" name="firstname" id="firstname" placeholder="First name"/>
                {touched.firstname && errors.firstname && <div className="error-message">{errors.firstname}</div>}

            <label for="lastname">LAST NAME:</label>
                <Field className="input-field" type="text" name="lastname" id="lastname" placeholder="Last name"/>
                {touched.lastname && errors.lastname && <div className="error-message">{errors.lastname}</div>}

            <div className="checkbox-field">
                <label for="gender">GENDER:</label>
                    <Field type="checkbox" name="male" checked={values.male} /><span style={{fontSize:'20px', marginRight:'10px'}}>Male</span>
                    <Field type="checkbox" name="female" checked={values.female}/><span style={{fontSize:'20px', marginRight:'10px'}}>Female</span>
                    <Field type="checkbox" name="other" checked={values.other}/><span style={{fontSize:'20px', marginRight:'10px'}}>Other</span>
            </div>
            

            <button>Submit</button>
        </Form>
    )
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const FormikRegisterForm = withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '',
            confirmpassword: '',
            phone: '',
            firstname: '',
            lastname: '',
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
        confirmpassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match!"
        ),
        firstname: Yup.string()
            .max(70, 'Last name is too long!')
            .required('First name is required'),
        lastname: Yup.string()
            .max(70, 'Last name is loo long!')
            .required('Last name is required!'),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid!")
            .min(10, 'Your phone number is too short!')
            .max(13, 'Your phone number is too long!')
            .required('Phone number is required!'),
    }),


})(RegisterForm)

export default FormikRegisterForm;