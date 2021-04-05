import React from "react";
import logo from "./img/logo-1.JPG";

const Header = () => {
  return (

    <header className="bg-lightblack d-flex justify-content-between align-items-center">

      <a className="navbar-brand" href="#">
        <img src={logo} width="160" height="50" alt="" />
      </a>

      <div className="profile-wrap d-flex align-items-center mr-3">
        <p className="mr-2">Sam Oliver</p>
        <span className="profile-pic">s</span>
      </div>

    </header>

  );
};
export default Header;
