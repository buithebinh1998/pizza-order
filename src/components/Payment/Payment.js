import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../../context/Context/Context";

const Payment = () => {
    const { isAuthenticated, cart, user } = useContext(Context);
    const flexPayment = isAuthenticated ?
    (
        <>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </>
    )
    : (
        <>
            <div>None</div>
        </>
    )

    return(
        <>
            <h1>DELIVERY INFORMATION</h1>
            {flexPayment}
        </>
    )
}

export default Payment