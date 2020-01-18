import React from 'react';
import { PropTypes } from 'prop-types';
import { NavTabs } from "../home/NavBar";
import "./shows.css";


class Shows extends React.Component {
  render() {
    return (
      <div>
      <NavTabs />
      <body className="showsBody">

      </body>
      </div>

    );
  }
}

Shows.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shows;
