import React, { Component } from "react";
import About from "../"

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#About" onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>
          About
        </a>
      </li>
      <li className="nav-item">
      <a href="#home" onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}>
          Home
      </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}
export default NavTabs;