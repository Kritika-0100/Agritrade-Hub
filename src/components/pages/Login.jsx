import React, { useState, useRef } from "react";
import agritradeLogo from "../../assets/images/AgriTradeLogo.png";
import { useNavigate } from "react-router-dom";
import { Link as LINK } from "react-router-dom";

import { userApiService } from "../../api/userApi";
import { text } from "framer-motion/client";
const Login = () => {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const errorEmail = useRef(null);
  const errorPassword = useRef(null);

  const [isError, setError] = useState({
    email: true,
    password: true,
  });

  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();

    //Email Validation
    if (inputEmailRef.current.value.trim() == "") {
      errorEmail.current.textContent = "Email is Required";
      errorEmail.current.style.color = "red";
      inputEmailRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, email: true };
      });
    } else {
      errorEmail.current.textContent = "";
      errorEmail.current.style.color = "";
      inputEmailRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, email: false };
      });
    }

    //Password Validation
    if (inputPasswordRef.current.value.trim() == "") {
      errorPassword.current.textContent = "Password is Required";
      errorPassword.current.style.color = "red";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, password: true };
      });
    } else {
      errorPassword.current.textContent = "";
      errorPassword.current.style.color = "";
      inputPasswordRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, password: false };
      });
    }
    //conditions
    if (isError.email === false && isError.password === false) {
      const crendentials = {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
      };
      userApiService.loginFarmer(crendentials, function (data) {
        if (data.length > 0 && data.length == 1) {
          const session_data = {
            id: data[0]?.id,
            name: data[0]?.name,
            email: data[0]?.email,
            mobile: data[0]?.mobile,
            role: data[0]?.role,
            company_name: data[0]?.company_name || "",
            business_type: data[0]?.business_type || "",
            gst_no: data[0]?.gst_no || "",
            address: data[0]?.address || ""
          };

          window.localStorage.setItem("session.data", JSON.stringify(session_data));

          if (data[0].role == "farmer") {
            navigate("/farmer/dashboard");
          } else if (data[0].role == "merchant") {
            navigate("/merchant/dashboard");
          } else if (data[0].role == "admin") {
            navigate("/admin/dashboard");
          }
        } else {
          window.alert("Invalid Email or Password");
        }
      });
    }
  }

  return (
    <React.Fragment>
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <h1 className="">Login Here</h1>
          <form action="#">
            <p className="mb-3">
              Enter Email
              <input type="email" id="email" name="email" ref={inputEmailRef} />
              <span ref={errorEmail}></span>
            </p>
            <p>
              Enter Password
              <input className="mb-30 ml-10"
                type="password"
                id="password"
                name="password"
                ref={inputPasswordRef}
              />
              <span ref={errorPassword}></span>
            </p>
            <button type="button" onClick={handleLoginSubmit} className="btn-primary-custom w-20">
              Login
            </button>
          </form>
          <p>Do not have an account ?
            <LINK to="/register" className="fw-bold text-decoration-none"> Register Here</LINK>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
