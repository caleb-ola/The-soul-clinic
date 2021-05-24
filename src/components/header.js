import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/images/logo.png"
              alt="The Soul Clinic's logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="/schedule_soul"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Schedule
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/schedule_lead">
                      Speak with a specialized coach{" "}
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/schedule15">
                      Book a free 15 minutes call{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/coaches">
                  Coaches
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/events">
                      Events
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/podcasts">
                      Podcasts
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/videos">
                      Videos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ebooks">
                      Ebooks
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>

              {/* <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>

            <form className="d-flex">
              <button
                className="btn btn-outline-success shadow-none donate-btn"
                type="submit"
              >
                DONATE
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
