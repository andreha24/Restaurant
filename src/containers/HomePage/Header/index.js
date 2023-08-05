import React from "react";

import Navigation from "./Navigation";

import Aside from "../../../components/Aside";

import "./index.css";

function Header() {
  return (
    <header className="header-home">
      <Aside />
      <Navigation />
    </header>
  );
}

export default Header;
