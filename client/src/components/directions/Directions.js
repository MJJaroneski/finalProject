import React from 'react';
import { PropTypes } from 'prop-types';
import "./addressProtect.css"

class Directions extends React.Component {
  render() {
    return (
      <div>Directions</div>
    );
  }
}

Directions.propTypes = {
  text: PropTypes.string.isRequired
};

export default Directions;
