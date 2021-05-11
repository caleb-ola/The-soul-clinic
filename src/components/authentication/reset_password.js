import React, { useState } from "react";

import Footer from "../footer";
import "./register.css";

const Reset = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const togglePassword = () => {
    setShowPass(showPass ? false : true);
  };
  const toggleConfirmPassword = () => {
    setShowConfPass(showConfPass ? false : true);
  };
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
                <h3>
                  Please enter your email address, we will send you a reset link
                </h3>
              </div>

              <form>
                <div className="row form-container">
                  <div className="row email-row">
                    <label for="email">Enter your email address*</label>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      className="email"
                    />
                  </div>

                  <div className="row submit-row">
                    <button
                      type="submit"
                      className="btn register-btn shadow-none"
                    >
                      SEND A RESET LINK{" "}
                    </button>
                    <p>
                      Already have an account? <a href="/login">Login</a>
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
              src="images/register-image.jpg"
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

export default Reset;
