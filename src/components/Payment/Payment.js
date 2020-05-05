import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../../context/Context/Context";
import { HoChiMinh, HaNoi } from "../../constants/dataProvince";
import Select from "react-select";
import "./Payment.css";
import callApi from "../../utils/callApi";

const Payment = (props) => {
  const { isAuthenticated, cart, user, totalPrice, clearCart } = useContext(
    Context
  );
  let history = props.history;
  let province = [
    { value: "HoChiMinh", label: "Ho Chi Minh" },
    { value: "HaNoi", label: "Ha Noi" },
  ];

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleProvinceChange = (selectedProvince) => {
    setSelectedProvince(selectedProvince);
  };

  const showDistrict = (selectedProvince) => {
    if (selectedProvince.value === "HaNoi") return HaNoi;
    if (selectedProvince.value === "HoChiMinh") return HoChiMinh;
  };

  const handleDistrictChange = (selectedDistrict) => {
    setSelectedDistrict(selectedDistrict);
  };

  const filledPaymentSchema = Yup.object().shape({
    street: Yup.string().required("Street is required!"),
  });

  const [paymentMethod, setPaymentMethod] = useState({
    method1: true,
    method2: false,
  });

  const onMethodChange = (event) => {
    if (event.target.value === "COD")
      setPaymentMethod({ method1: true, method2: false });
    else setPaymentMethod({ method1: false, method2: true });
  };

  const getOrderTime = () => {
    let today = new Date();
    let orderTime =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    return orderTime;
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const unfilledPaymentSchema = Yup.object().shape({
    fullName: Yup.string()
      .max(5, "Full name is too short!")
      .max(70, "Full name is too long!")
      .required("Full name is required!"),
    street: Yup.string().required("Street is required!"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid!")
      .min(10, "Your phone number is too short!")
      .max(13, "Your phone number is too long!")
      .required("Phone number is required!"),
  });

  const flexPayment = isAuthenticated ? (
    <>
      <Formik
        initialValues={{ street: "" }}
        validationSchema={filledPaymentSchema}
        onSubmit={(values, { setSubmitting }) => {
          const orderCart= cart; 
          const orderUserInformation= {};
          let orderTotalPrice = totalPrice / 1000;
          orderUserInformation.fullName = user.fullName;
          orderUserInformation.phone = user.phone;
          orderUserInformation.address =
            values.street +
            ", " +
            selectedDistrict.label +
            ", " +
            selectedProvince.label;
          orderUserInformation.email = "";
          let orderEmail = user.email;
          let orderNote = values.note ? "" : values.note;
          let orderTime = getOrderTime();
          let orderPaymentMethod = "";
          if (paymentMethod.method1) orderPaymentMethod = "COD";
          else orderPaymentMethod = "ATM";

          if (
            selectedProvince.label === undefined ||
            selectedDistrict.label === undefined
          ) {
            swal({
              title: "Error location!",
              text: "You have not choose province or district!",
              icon: "error",
              timer: 3000,
            });
            setSubmitting(false);
          } else if (orderPaymentMethod === "ATM") {
            swal({
              title: "Payment via ATM under maintenance!",
              text:
                "Please select Cash-On-Delivery, sorry for this inconvenience!",
              icon: "error",
              timer: 3000,
            });
            setSubmitting(false);
          } else {
            callApi(
              "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/order/add",
              "POST",
              {
                cart: orderCart,
                email: orderEmail,
                note: orderNote,
                orderTime: orderTime,
                orderUserInformation: orderUserInformation,
                paymentMethod: orderPaymentMethod,
                totalPrice: orderTotalPrice
              }
            ).then(() => {
              console.log({orderCart, orderNote, orderEmail, orderTime, orderUserInformation, orderPaymentMethod, orderTotalPrice});
            });
            setTimeout(() => {
              swal({
                title: "Your order is confirmed!",
                text: "Please wait for at least 20 minutes until delivery.",
                icon: "success",
                timer: 5000,
              });
              setSubmitting(false);
              clearCart();
              const newCart = [];
              localStorage.setItem("cart", JSON.stringify(newCart));
              history.push("/");
            }, 2000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="payment-text">
              <b>Full name:</b> {user.fullName}
            </div>
            <div className="payment-text">
              <b>Phone:</b> {user.phone}
            </div>
            <div className="payment-select">
              <div className="payment-text">
                <b>Province:</b>{" "}
                <Select
                  options={province}
                  defaultValue={{
                    label: "Select province",
                    value: "unselected",
                  }}
                  onChange={handleProvinceChange}
                />
              </div>
              <div className="payment-text">
                <b>District:</b>{" "}
                <Select
                  options={showDistrict(selectedProvince)}
                  defaultValue={{
                    label: "Select district",
                    value: "unselected",
                  }}
                  onChange={handleDistrictChange}
                />
              </div>
            </div>

            <div className="payment-text">
              <div>
                <b>Street:</b>
              </div>
              <Field className="payment-input-field" name="street" />
              <div className="payment-error">
                <ErrorMessage name="street" />
              </div>
            </div>

            <div className="payment-example">
              Fill in the address number together with street you want us to
              deliver to.
              <br />
              Example: 250 Cong Hoa
            </div>

            <div className="payment-text">
              <div>
                <b>Note for delivery:</b>
              </div>
              <Field
                className="payment-input-field"
                name="note"
                as="textarea"
                style={{ height: "3rem" }}
              />
            </div>

            <div className="payment-text">
              <b>Payment Method:</b>
            </div>
            <input
              id="COD"
              value="COD"
              name="payment-method"
              type="radio"
              checked={paymentMethod.method1}
              onChange={onMethodChange}
            />
            <label htmlFor="COD" style={{ marginRight: "1rem" }}>
              Cash-On-Delivery
            </label>

            <input
              id="ATM"
              value="ATM"
              name="payment-method"
              type="radio"
              checked={paymentMethod.method2}
              onChange={onMethodChange}
            />
            <label htmlFor="ATM">ATM card</label>
            <div style={{ textAlign: "center" }}>
              <button type="submit" disabled={isSubmitting}>
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  ) : (
    <>
      <Formik
        initialValues={{ street: "", fullName: "", phone: "", note: "" }}
        validationSchema={unfilledPaymentSchema}
        onSubmit={(values, { setSubmitting }) => {
          const orderCart= cart; 
          const orderUserInformation= {};
          let orderTotalPrice = totalPrice / 1000;
          orderUserInformation.fullName = values.fullName;
          orderUserInformation.phone = values.phone;
          orderUserInformation.address =
            values.street +
            ", " +
            selectedDistrict.label +
            ", " +
            selectedProvince.label;
          orderUserInformation.email = "";
          let orderEmail = "";
          let orderNote = values.note ? "" : values.note;
          let orderTime = getOrderTime();
          let orderPaymentMethod = "";
          if (paymentMethod.method1) orderPaymentMethod = "COD";
          else orderPaymentMethod = "ATM";

          if (
            selectedProvince.label === undefined ||
            selectedDistrict.label === undefined
          ) {
            swal({
              title: "Error location!",
              text: "You have not choose province or district!",
              icon: "error",
              timer: 3000,
            });
            setSubmitting(false);
          } else if (orderPaymentMethod === "ATM") {
            swal({
              title: "Payment via ATM under maintenance!",
              text:
                "Please select Cash-On-Delivery, sorry for this inconvenience!",
              icon: "error",
              timer: 3000,
            });
            setSubmitting(false);
          } else {
            callApi(
              "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/order/add",
              "POST",
              {
                cart: orderCart,
                email: orderEmail,
                note: orderNote,
                orderTime: orderTime,
                orderUserInformation: orderUserInformation,
                paymentMethod: orderPaymentMethod,
                totalPrice: orderTotalPrice
              }
            ).then(() => {
              console.log({orderCart, orderNote, orderEmail, orderTime, orderUserInformation, orderPaymentMethod, orderTotalPrice});
            });
            setTimeout(() => {
              swal({
                title: "Your order is confirmed!",
                text: "Please wait for at least 20 minutes until delivery.",
                icon: "success",
                timer: 5000,
              });
              setSubmitting(false);
              clearCart();
              const newCart = [];
              localStorage.setItem("cart", JSON.stringify(newCart));
              history.push("/");
            }, 2000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="payment-text">
              <div>
                <b>Full name:</b>
              </div>
              <Field className="payment-input-field" name="fullName" />
              <div className="payment-error">
                <ErrorMessage name="fullName" />
              </div>
            </div>
            <div className="payment-text">
              <div>
                <b>Phone:</b>
              </div>
              <Field className="payment-input-field" name="phone" />
              <div className="payment-error">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <div className="payment-select">
              <div className="payment-text">
                <b>Province:</b>{" "}
                <Select
                  options={province}
                  defaultValue={{
                    label: "Select province",
                    value: "unselected",
                  }}
                  onChange={handleProvinceChange}
                />
              </div>
              <div className="payment-text">
                <b>District:</b>{" "}
                <Select
                  options={showDistrict(selectedProvince)}
                  defaultValue={{
                    label: "Select district",
                    value: "unselected",
                  }}
                  onChange={handleDistrictChange}
                />
              </div>
            </div>

            <div className="payment-text">
              <div>
                <b>Street:</b>
              </div>
              <Field className="payment-input-field" name="street" />
              <div className="payment-error">
                <ErrorMessage name="street" />
              </div>
            </div>

            <div className="payment-example">
              Fill in the address number together with street you want us to
              deliver to. <br />
              Example: 250 Cong Hoa
            </div>

            <div className="payment-text">
              <div>
                <b>Note for delivery:</b>
              </div>
              <Field
                className="payment-input-field"
                name="note"
                as="textarea"
                style={{ height: "3rem" }}
              />
            </div>

            <div className="payment-text">
              <b>Payment Method:</b>
            </div>
            <input
              id="COD"
              value="COD"
              name="payment-method"
              type="radio"
              checked={paymentMethod.method1}
              onChange={onMethodChange}
            />
            <label htmlFor="COD" style={{ marginRight: "1rem" }}>
              Cash-On-Delivery
            </label>

            <input
              id="ATM"
              value="ATM"
              name="payment-method"
              type="radio"
              checked={paymentMethod.method2}
              onChange={onMethodChange}
            />
            <label htmlFor="ATM">ATM card</label>
            <div style={{ textAlign: "center" }}>
              <button type="submit" disabled={isSubmitting}>
                Confirm
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );

  

  return (
    <div className="payment-form">
      <h3 style={{ color: "#e31837" }}>USER INFORMATION</h3>
      {flexPayment}
    </div>
  );
};

export default withRouter(Payment);
