import React, { useState } from "react";

import Footer from "../footer";
import "./register.css";

const Register = () => {
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fee7f9"
                  fill-opacity="1"
                  d="M0,0L40,16C80,32,160,64,240,90.7C320,117,400,139,480,128C560,117,640,75,720,90.7C800,107,880,181,960,208C1040,235,1120,213,1200,192C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg> */}
                <img
                  src="images/top-wave.png"
                  alt="top wave"
                  className="img-fluid top-wave"
                />
              </div>
            </div>
            <div className="container ">
              <div className="row register-header">
                {" "}
                <h3>Join The Soul Clinic to speak with a coach</h3>
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                      <label for="create-password">Create password</label>
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <label for="confirm-password">Confirm password</label>
                      <input
                        placeholder="Confirm password"
                        type={showConfPass ? "text" : "password"}
                        name="confirm-password"
                        className="confirm-password"
                      />
                      <i
                        class={showConfPass ? "far fa-eye-slash" : "far fa-eye"}
                        id="togglePassword"
                        onClick={toggleConfirmPassword}
                      ></i>
                    </div>
                  </div>
                  <div className="row accept-row ">
                    <p>
                      {" "}
                      <input
                        type="checkbox"
                        name="register-checkbox"
                        className="register-checkbox custom-control-input"
                      />{" "}
                      I accept The Soul Clinic's{" "}
                      <a href="#">Terms and Conditions</a> and{" "}
                      <a href="#">Privacy Policy.</a>
                    </p>
                  </div>
                  <div className="row submit-row">
                    <button
                      type="submit"
                      className="btn register-btn shadow-none"
                    >
                      SCHEDULE A FREE CALL
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
              <div className="col-lg-6 col-md-6 col-sm-6 down-wave-container2">
                {" "}
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
              src="images/authentication/register-image.png"
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

export default Register;
