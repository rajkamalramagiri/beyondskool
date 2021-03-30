import React from "react";
import "./Navigation.css";
import logo from "../../assets/images/logo.svg";

function Navigation() {
  return (
    <div className="container-fluid ">
      <div className="row navigation ">
        <div className="col-6">
          <img className="navigation_logo" src={logo} />
        </div>
        <div className="col-6 ">
          <div className="nav_right">
            <div className="navigation_link about ">About us</div>
            <div className="navigation_link about ">Careers</div>
            <div className="navigation_link about">Contact</div>
            <div className="navigation_link about">
              <button className="nav_right_btn1">Login</button>
            </div>
            <div className="navigation_link ">
              <button className="nav_right_btn2">Book a free demo class</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
