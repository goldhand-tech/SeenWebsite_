import { useState } from "react";
import src1 from "../assets/images/menu.svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar dropdown">
      <ul className="navbar-list">
        <li className="navbar-item-btn" onClick={() => setIsOpen(!isOpen)}>
          <img src={src1} alt="My Happy SVG" />
        </li>
        <li className={isOpen ? "navbar-item show" : "navbar-item"}>
          <a href="/">Home</a>
        </li>
        <li className={isOpen ? "navbar-item show" : "navbar-item"}>
          <a href="/privacypolicy">Privacy Policy</a>
        </li>
        <li className={isOpen ? "navbar-item show" : "navbar-item"}>
          <a href="/termsconditions">Terms & Conditions</a>
        </li>
      </ul>
    </nav>
  );
};
