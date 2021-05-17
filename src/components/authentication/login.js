import React, { useState } from "react";

import Footer from "../footer";
import "./register.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const togglePassword = () => {
    setShowPass(showPass ? false : true);
  };
  // const toggleConfirmPassword = () => {
  //   setShowConfPass(showConfPass ? false : true);
  // };
  return (
    <div>
      <section id="register">
        <div className="row container-row">
          <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 register-left">
            <div className="row">
              <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-5 logo-container ">
                <div className="container">
                  <img
                    src="images/logo.png"
                    alt="Logo"
                    className="img-fluid register-logo"
                  />
                </div>
              </div>
              <div className=" col-xl-7 col-lg-7 col-md-7 col-sm-7 wave-container">
                <img
                  src="images/top-wave.png"
                  alt="top wave"
                  className="img-fluid top-wave"
                />
              </div>
            </div>
            <div className="container ">
              <div className="row register-header">
                <h3>Login to your account</h3>
              </div>

              <form>
                <div className="row form-container">
                  <div className="row email-row">
                    <label for="email">Email address</label>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      className="email"
                    />
                  </div>
                  <div className="row password-row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                      <label for="create-password">Password</label>
                      <input
                        placeholder="Password"
                        type={showPass ? "text" : "password"}
                        name="create-password"
                        className="create-password"
                      />
                      <i
                        class={showPass ? "far fa-eye-slash" : "far fa-eye"}
                        id="togglePassword"
                        onClick={togglePassword}
                      ></i>
                    </div>
                  </div>
                  <div className="row submit-row">
                    <button
                      type="submit"
                      className="btn register-btn shadow-none"
                    >
                      LOGIN{" "}
                    </button>
                    <p>
                      <a href="/reset_password">Forgot password?</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="row bottom-waves">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 down-wave-container ">
                <img
                  src="images/top-wave.png"
                  alt="top wave"
                  className="img-fluid down-wave"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 down-wave-container">
                <img
                  src="images/bottom-wave22.png"
                  alt="top wave"
                  className="img-fluid down-wave2"
                />
              </div>
            </div>
          </div>
          <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 register-right">
            <img
              src="images/authentication/login-image.png"
              alt="register image"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
