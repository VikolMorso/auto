import React from "react";
import s from "./Header.module.css";
import logo from "../../img/Group 2.svg";

const Header = () => {
  return (
    <div className={s.main}>
      <div className={s.logo}>
        <img src={logo} atl="" />
      </div>
    </div>
  );
};

export default Header;
