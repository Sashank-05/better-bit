import React from "react";
import NavbarCSS from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={NavbarCSS.navbar}>
      <h3 className={NavbarCSS.navbarlogo}><a href="#">BetterBIT</a></h3>
      <ul className={NavbarCSS.navbaroptions}>
        <li><a href="#">Contributors</a></li>
        <li><a href="#">Contribute</a></li>
        <li><a href="#">Login</a></li>
      </ul >
    </nav >
  )
}
