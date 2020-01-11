import React from "react";
import { Link } from "react-router-dom";


function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" onClick={() => props.handlePageChange("index")} className={props.currentPage === "index" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="../about" onClick={() => props.handlePageChange("About")} className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
      <Link to="../directions" onClick={() => props.handlePageChange("Directions")} className={props.currentPage === "Directions" ? "nav-link active" : "nav-link"}>
          Directions
      </Link>
      </li>
      <li className="nav-item">
        <Link to="../contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </Link>
      </li>
      <li className="nav-item">
      <Link to="../shows" onClick={() => props.handlePageChange("Shows")} className={props.currentPage === "Shows" ? "nav-link active" : "nav-link"}>
          Upcoming Shows
      </Link>
      </li>
      <li className="nav-item">
      <Link to="../artists" onClick={() => props.handlePageChange("Artists")} className={props.currentPage === "Artists" ? "nav-link active" : "nav-link"}>
          Artists
      </Link>
      </li>
    </ul>
  );
}
export default NavTabs;