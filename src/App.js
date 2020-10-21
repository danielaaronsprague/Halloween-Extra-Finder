import React from "react";
import { Header, Home, Extra } from "./components";
import blood from "./assets/blood.png";
import "./App.css";
import "./App.scss";

const App = () => {
  return (
    <div className='App'>
      <img
        src={blood}
        style={{
          width: "150px",
          position: "fixed",
          top: "22px",
          right: "-75px",
        }}
        className='blood-logo'
        alt='logo'
      />
      <Header />
      <Home />
    </div>
  );
};

export default App;
