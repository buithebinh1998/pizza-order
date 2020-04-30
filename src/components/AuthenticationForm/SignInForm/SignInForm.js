import React, { useContext } from "react";
import "../AuthForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import callApi from "./../../../utils/callApi";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../../../context/Context/Context";
const SignInForm = (props) => {
  const { checkAuthenticated, signIn, cart } = useContext(Context);

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid!")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer!")
      .max(50, "Password is too long!")
      .required("Password is required!"),
  });
  
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={(values, { setSubmitting }) => {
          let errors = "";
          let dataUser = [];
          callApi(
            "https://5ea10ddbeea7760016a923e2.mockapi.io/api/v1/signin-authentication",
            "POST",
            {
              email: values.email,
              password: values.password,
            }
          ).then((response) => {
            errors = response.data.errorCode;
            dataUser = response.data.data;
          });
          setTimeout(() => {
            if (errors === "404") {
              swal({
                title: "SIGN IN FAILED",
                text: "You have typed wrong email or password!",
                icon: "error",
                timer: 2000,
              });
            } else {
              let history = props.history;
              swal({
                title: "SIGN IN SUCCESFULLY!",
                icon: "success",
                button: "Done!",
                timer: 2000,
              });
              checkAuthenticated(true);
              signIn(dataUser);
              if (cart.length === 0) history.push("/");
              else history.push("/payment");
              localStorage.setItem("user", JSON.stringify(dataUser));
              localStorage.setItem("isAuthenticated", JSON.stringify(true));
            }
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-auth">
            <h2>SIGN IN</h2>
            <h3>Please enter your email and password</h3>
            <label>EMAIL:</label>
            <Field
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="error-message">
              <ErrorMessage name="email" />
            </div>

            <label>PASSWORD:</label>
            <Field
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
            />
            <div className="error-message">
              <ErrorMessage name="password" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
            <div className="sign-up">
              Don't have account? <NavLink to="/signup">Sign Up.</NavLink>
            </div>
            <div className="sign-up">
              Forget your password? <NavLink to="/signup">Click here.</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default withRouter(SignInForm);
