import React from "react";
import "../App.css"

function Footer() {
  return (
    <header>
      <div>
        <ul className="nav-links text-3xl font-bold">
          <li>
            <a href="#index.html">user</a>
          </li>

          <li>
            <a href="#about.html">dashbord</a>
          </li>
          <li>
            <a href="#products.html">delivery</a>
          </li>
          <li>
            <a href="#contact.html">about us</a>
          </li>
          <select className="nav-btn btn" id="nav-btn">
            menufg
            <option>
              <a href="#index.html">user</a>
            </option>
          </select>
        </ul>
      </div>
    </header>
  );
}

export default Footer;
