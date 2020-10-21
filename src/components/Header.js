import React from "react";
// import logo from "../assets/logo.svg";
import logo from "../assets/pumpkin.png";

export const Header = () => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <div>Halloween Movie Extra Finder</div>
    </header>
  );
};
