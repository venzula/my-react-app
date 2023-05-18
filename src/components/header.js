import React from "react";

const Header = () => {
  return (
    <section class="header-section">
      <div class="header-content">
        <h2>
          Hi there 👋, I'm <br />
          <span class="header-name">Carlos</span>
          <br />
          I'm a Frontend Developer
        </h2>

        <img src="./Header-Img.png" class="header-img" alt="" />
      </div>
      <div class="social-icons">
        <a href="mailto:venzulafx@gmail.com?subject=Hi!" target="_blank">
          <img src="./gmail-img.png" alt="" />
        </a>
        <a href="https://github.com/venzula" target="_blank">
          <img src="./github-img.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/carlos-martinez1" target="_blank">
          <img src="./linkedin-img.png" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Header;
