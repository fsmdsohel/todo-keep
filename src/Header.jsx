import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./img/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} width="70px" alt="Logo" />
        <h1>Shohel Keep</h1>
      </div>
    </>
  );
};

export default Header;
