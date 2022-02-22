import React, { useState } from "react";
import Container from "@mui/material/Container";

import "./navbar.css";
function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "navbar colorChange" : "navbar"}>
      <Container>
        <div className="nav">
          <div></div>
          <ul className="nav-items">
            <li className="nav-item">
              <a
                className="t-menu__link-item"
                href="/"
                data-menu-submenu-hook=""
                data-menu-item-number="1"
              >
                NFT Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a
                className="t-menu__link-item"
                href="/#brands"
                data-menu-submenu-hook=""
                data-menu-item-number="2"
              >
                For Brands
              </a>
            </li>
            <li className="nav-item">
              <a
                className="t-menu__link-item"
                href="/#artist-and-teams"
                data-menu-submenu-hook=""
                data-menu-item-number="3"
              >
                Artists &amp; Teams
              </a>{" "}
            </li>
            <li className="nav-item">
              <a
                className="t-menu__link-item"
                href="/#contact"
                data-menu-submenu-hook=""
                data-menu-item-number="4"
              >
                Contact
              </a>{" "}
            </li>
          </ul>
          <div>
            <div className="toggle_box">
              <div className="toggle_btn">
                <div className="toggle_bar" />
                <div className="toggle_bar" />
                <div className="toggle_bar" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
