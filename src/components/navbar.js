import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <h1>Carlos</h1>
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isActive ? "responsive" : ""}`}>
        <a href="#projects">
          <li>
            <i className="fa-solid fa-laptop-code"></i> Projects
          </li>
        </a>
        <a href="#skills">
          <li>
            <i className="fa-solid fa-laptop-file"></i> Skills
          </li>
        </a>

        <a href="#contact">
          <li>
            <i className="fa-solid fa-address-book"></i> Contact
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
