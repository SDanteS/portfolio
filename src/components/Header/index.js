import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="navbar" style={{ marginTop: 40 }}>
    <section className="navbar-section ">
      <Link to="/" className="navbar-brand ">
        LOGO
      </Link>
    </section>
    <section className="navbar-section">
      <Link
        to="/missions"
        className="navbar-brand"
        style={{ paddingRight: 20 }}
      >
        Missions
      </Link>{" "}
      <Link
        to="/formation"
        className="navbar-brand "
        style={{ paddingRight: 20 }}
      >
        Formation
      </Link>
      <button className="btn btn-lg">contact me</button>
    </section>
  </header>
);

export default Header;
