import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <h2 class="contact-heading">Contact</h2>
      <div class="contact-container">
        <div>
          <p class="contact-para">
            Want to get in touch? Contact me on any of the platform
          </p>
          <div class="footer-social-icons">
            <a href="mailto:venzulafx@gmail.com?subject=Hi!" target="_blank">
              <img src="./gmail-img.png" alt="" />
            </a>
            <a href="https://github.com/venzula" target="_blank">
              <img src="./github-img.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-martinez1"
              target="_blank"
            >
              <img src="./linkedin-img.png" alt="" />
            </a>
          </div>
        </div>
        <div>
          <a download href="./carlos-resume.docx">
            <button>Download Resume</button>
          </a>
        </div>
      </div>
      <div class="copyright-text">
        &copy; Copyright 2023 Carlos Portfolio App
      </div>
    </footer>
  );
};

export default Footer;
