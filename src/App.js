import React from "react";
import { Header, Footer } from "./components";
import blood from "./assets/blood.png";
import { useRoutes } from "hookrouter";
import routes from "./router";
import "./App.css";
import "./App.scss";

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className='App'>
      <img
        src={blood}
        style={{
          width: "150px",
          position: "fixed",
          top: "22px",
          right: "-75px",
          zIndex: "13",
        }}
        className='blood-logo'
        alt='logo'
      />
      <Header />
      {routeResult || <h1>Page Not Found</h1>}
      <Footer />
    </div>
  );
};

export default App;
