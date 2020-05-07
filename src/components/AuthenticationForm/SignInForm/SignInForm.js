import React, { useContext } from "react";
import "../AuthForm.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../../../context/Context/Context";
import * as jwt_decode from "jwt-decode";

const SignInForm = (props) => {
  const {
    isAuthenticated,
    checkAuthenticated,
    signIn,
    cart,
    setNewToken,
  } = useContext(Context);

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid!")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer!")
      .max(50, "Password is too long!")
      .required("Password is required!"),
  });

  const SignInFormik = isAuthenticated ? (
    <div className="form-auth">
      <h2>SIGN IN</h2>
      <h3>You have already signed in.</h3>
    </div>
  ) : (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "https://ec2-52-221-225-178.ap-southeast-1.compute.amazonaws.com:8080/pycozza/api/login",
            {
              email: values.email,
              password: values.password,
            },
            { crossdomain: true }
          )
          .then((response) => {
            setNewToken(response.data);
            let newToken = response.data;
            let decodedUser = jwt_decode(response.data);
            setTimeout(() => {
              let history = props.history;
              swal({
                title: "SIGN IN SUCCESFULLY!",
                icon: "success",
                button: "Done!",
                timer: 3000,
              });
              checkAuthenticated(true);
              signIn(decodedUser);
              if (cart.length === 0) history.push("/");
              else history.push("/payment");
              localStorage.setItem("token", newToken);
              localStorage.setItem("user", JSON.stringify(decodedUser));
              localStorage.setItem("isAuthenticated", JSON.stringify(true));
              setSubmitting(false);
            }, 2000);
          })
          .catch((error) => {
            if (error.response.status === 400) {
              setTimeout(() => {
                swal({
                  title: "SIGN IN FAILED",
                  text: "You have typed wrong email or password!",
                  icon: "error",
                  timer: 3000,
                });
                setSubmitting(false);
              }, 2000);
            }
            return Promise.reject(error.response);
          });
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
  );

  return <>{SignInFormik}</>;
};

export default withRouter(SignInForm);
