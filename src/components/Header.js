import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <div className="logo">
          <span className="symbol">
            {" "}
            <img src={logo} alt="FreightHubLogo" />{" "}
          </span>{" "}
          <span className="title"> Freight Hub </span>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};
export default Header;
