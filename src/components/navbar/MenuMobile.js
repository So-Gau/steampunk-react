import React, { useState } from "react";
import "./menuMobile.scss";

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  //     if (navigationMobile.classList.contains("open")) {
  //       navigationMobile.classList.remove("open");
  //       // navigationMobile.style.width = "0";
  //     } else {
  //       navigationMobile.classList.add("open");
  //       // navigationMobile.style.width = "80vw";

  // l'opérateur ! sert a inversé la valeur actuelle, quand on cliquera sur la variable d'état de "open", nous aurons true
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div>
      <header>
        <div
          className={`mobile-icon ${open ? "open" : ""}`}
          onClick={handleClick}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div id="logo">
          <img src="../assets/logo.png" alt="logo"></img>
        </div>
      </header>
      <nav id="navMobile" className={`navMobile ${open ? "open" : ""}`}>
        <ul>
          <li>
            <a>Heroka</a>
          </li>
          <li>
            <a>Selena</a>
          </li>
          <li>
            <a>Fanstasy</a>
          </li>
          <li>
            <a>Clark</a>
          </li>
          <li>
            <a>Stellar</a>
          </li>
          <li className="contactButton">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
