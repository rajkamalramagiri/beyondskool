import React from "react";

import logo from "../../assets/images/logo.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end align-items-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="nav_right_btn1">Login</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="nav_right_btn2 ">
                  Book a free demo class
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
