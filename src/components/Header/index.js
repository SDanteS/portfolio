import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="navbar">
    <section className="navbar-section">
      <Link to="/" className="navbar-brand mr-1">
        LOGO
      </Link>
    </section>
    <section className="navbar-section">
      <Link to="/experiences" className="navbar-brand mr-1">
        Experiences
      </Link>{" "}
      <Link to="/formation" className="navbar-brand mr-1">
        Formation
      </Link>
      <button className="btn btn-lg">contact me</button>
    </section>
  </header>
);

export default Header;
