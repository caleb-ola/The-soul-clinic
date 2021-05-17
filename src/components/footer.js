import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12">
            <a href="/">
              <img
                src="/images/white-logo.png"
                alt="Footer logo"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 footer-right">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                <p className="footer-heads">RESOURCES</p>
                <p>
                  <a href="#">Videos</a>
                </p>
                <p>
                  <a href="#">Webinars</a>
                </p>
                <p>
                  <a href="#">Podcasts</a>
                </p>
                <p>
                  <a href="#">ebooks</a>
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                <p className="footer-heads">THE SOUL CLINIC</p>
                <p>
                  <a href="/about">About</a>
                </p>
                <p>
                  <a href="/blog">Blog</a>
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                <p className="footer-heads">SUPPORT</p>
                <p>
                  <a href="#">Quick Scan</a>
                </p>
                <p>
                  <a href="#">Support Coach</a>
                </p>
                <p>
                  <a href="#">FAQs</a>
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                <p className="footer-heads">CONTACT US</p>
                <p>Greensborough Village Circle, Markham ON. L6E1M4, Canada</p>
                <p>thesoulclinic101@gmail.com</p>
              </div>
            </div>
            <div className="row bottom-section">
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 ">
                <p>Copyright 2021, Qeola Inc. Alrights reserved.</p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                <p>Data &amp; Privacy Policy.</p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 ">
                <ul className="social">
                  <li>
                    <a>
                      <i class="fab fa-instagram rnd"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-twitter rnd"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-facebook-f rnd"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
