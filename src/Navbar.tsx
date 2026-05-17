import { Link } from "react-router-dom";

import Socials from "./Socials.tsx";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/"> Alex Dziedzic </Link>
        <Socials />
      </div>
    </div>
  );
}

export default Navbar;
