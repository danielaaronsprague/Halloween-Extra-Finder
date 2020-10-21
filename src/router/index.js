import React from "react";
import { Home, Extras } from "../components";

const routes = {
  "/": () => <Home />,
  "/extras": () => <Extras />,
};
export default routes;
