import React from "react";
import "./Navigation.css";
import logo from "../ICONS/logo.png";

const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <img src={logo} alt="logo" class="logo  "></img>
      </div>
    </nav>
  );
};

export default Navigation;