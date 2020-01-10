import React, { Component } from "react";


function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="../about" onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>
          About
        </a>
      </li>
      <li className="nav-item">
      <a href="../directions" onClick={() => props.handlePageChange("Directions")} className={props.currentPage === "Directions" ? "nav-link active" : "nav-link"}>
          Directions
      </a>
      </li>
      <li className="nav-item">
        <a href="../contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
      <li className="nav-item">
      <a href="../shows" onClick={() => props.handlePageChange("Shows")} className={props.currentPage === "Shows" ? "nav-link active" : "nav-link"}>
          Upcoming Shows
      </a>
      </li>
      <li className="nav-item">
      <a href="../artists" onClick={() => props.handlePageChange("Artists")} className={props.currentPage === "Artists" ? "nav-link active" : "nav-link"}>
          Artists
      </a>
      </li>
    </ul>
  );
}
export default NavTabs;