import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {withRouter} from 'react-router-dom'
import swal from "sweetalert";
import { Context } from "../../context/Context/Context";
import {HoChiMinh, HaNoi} from "../../constants/dataProvince"
import Select from 'react-select'
import './Payment.css'

const Payment = (props) => {
    const { isAuthenticated, cart, user, totalPrice, clearCart } = useContext(Context);
    let history = props.history;
    let province = [
        { value: 'HoChiMinh', label: 'Ho Chi Minh' },
        { value: 'HaNoi', label: 'Ha Noi' }
    ]

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleProvinceChange = (selectedProvince) => {
        setSelectedProvince(selectedProvince);
    }

    const showDistrict = (selectedProvince) => {
        if(selectedProvince.value==="HaNoi") return HaNoi;
        if(selectedProvince.value==="HoChiMinh") return HoChiMinh;
    }

    const handleDistrictChange = (selectedDistrict) => {
        setSelectedDistrict(selectedDistrict);
    }

    const filledPaymentSchema = Yup.object().shape({
        street: Yup.string()
          .required("Street is required!"),
    });

    const [paymentMethod, setPaymentMethod] = useState({method1:true, method2:false});

    const onMethodChange = (event) => {
        if(event.target.value === "COD") setPaymentMethod({method1: true, method2: false});
        else setPaymentMethod({method1: false, method2: true});
    }


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const unfilledPaymentSchema = Yup.object().shape({
        fullName: Yup.string()
            .max(5, 'Full name is too short!')
            .max(70, 'Full name is too long!')
            .required('Full name is required'),
        street: Yup.string()
          .required("Street is required!"),
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid!")
          .min(10, 'Your phone number is too short!')
          .max(13, 'Your phone number is too long!')
          .required('Phone number is required!'),
    });

    const flexPayment = isAuthenticated ?
    (
        <>
            <Formik 
                initialValues={{street: ""}}
                validationSchema={filledPaymentSchema}
                onSubmit={(values, { setSubmitting }) => {
                    let data = {cart: [], totalPrice: 0, orderUserInfomation: []};
                    data.cart = cart;
                    data.totalPrice = totalPrice;
                    data.orderUserInfomation.fullName = user.fullName;
                    data.orderUserInfomation.phone = user.phone;
                    data.orderUserInfomation.address = values.street + ", " + selectedDistrict.label + ", " + selectedProvince.label;
                    data.email = user.email;
                    console.log(data);
                    if(selectedProvince.label===undefined || selectedDistrict.label===undefined){
                        swal({
                            title: 'Error location',
                            text:'You have not choose province or district!',
                            icon: 'error',
                            timer: 2000
                        });
                        setSubmitting(false);
                    }
                    else {
                        setTimeout(() => {
                            console.log(data);
                            swal({
                                title: 'Your order is confirmed!',
                                text:'Please wait for at least 20 minutes until delivery.',
                                icon: 'success',
                                timer: 2000
                            });
                            setSubmitting(false);
                            clearCart();
                            history.push('/');
                        }, 2000);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div><b>Full name:</b> {user.fullName}</div>
                        <div><b>Phone:</b> {user.phone}</div>
                        <div className="payment-select">
                            <b>Province:</b> <Select options={province} defaultValue={{label: "Select province", value: 'unselected'}} onChange={handleProvinceChange}/>
                            <b>District:</b> <Select options={showDistrict(selectedProvince)} defaultValue={{label: "Select district", value: 'unselected'}} onChange={handleDistrictChange}/>
                        </div>

                        <div><b>Street:</b></div>
                        <Field className="payment-input-field" name="street"/>
                        <ErrorMessage component="span" name="street"/>
                        
 
                        <div><b>Payment Method:</b></div>
                        <input id="COD" value="COD" name="payment-method" type="radio" checked={paymentMethod.method1} onChange={onMethodChange}/>
                        <label htmlFor="COD" style={{marginRight:'1rem'}}>Cash-On-Delivery</label>

                        <input id="ATM" value="ATM" name="payment-method" type="radio" checked={paymentMethod.method2} onChange={onMethodChange}/>
                        <label htmlFor="ATM">ATM card</label>
                        <div style={{textAlign:'center'}}>
                            <button type="submit" disabled={isSubmitting}>Confirm</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
    : (
        <>
            <div>None</div>
        </>
    )

    return(
        <div className="payment-form">
            <h3 style={{color:'#e31837'}}>USER INFORMATION</h3>
            {flexPayment}
        </div>
    )
}

export default withRouter(Payment)