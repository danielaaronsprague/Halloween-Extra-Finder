import React from "react";
import logo from "../assets/pumpkin.png";
import { A } from "hookrouter";

export const Header = () => {
  return (
    <header className='App-header'>
      <A href='/' id='home-link'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>Halloween Movie Extra Finder</div>
      </A>
    </header>
  );
};
