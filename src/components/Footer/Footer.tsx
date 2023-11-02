import React from "react";
// import { Link } from "react-router-dom";
import m from "./Footer.module.scss";
import copyright from "../../assets/copyright.svg";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <div className={m.footer}>
      <div className={m.footer_container}>
        <div className={m.footer_wrapper}>
          <div className={m.footer_info}>
            <div className={m["footer_info-logo"]}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={m["footer_info-social"]}>
              <h2>Follow us</h2>
              <div>
                <a target="_blank" href="https://twitter.com/">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/">
                  <img src={linkedin} alt="Linkedin" />
                </a>
                <a target="_blank" href="https://www.facebook.com/">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
            <div className={m["footer_info-links"]}>
              <h2>Useful Links</h2>
              <ul>
                <li>Our Projects</li>
                <li>FAQ’s</li>
                <li>News and Updates</li>
              </ul>
            </div>
            <div className={m["footer_info-contacts"]}>
              <h2>Contacts</h2>
              <p>Address : 4-5 Main road , Delhi</p>
              <p>Email : educare@gmail.com</p>
              <p>Phone Number : +91 4533433265</p>
            </div>
          </div>
          <div className={m.footer_copyright}>
            <img src={copyright} alt="Copyright" />
            <p>All Copyrights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
