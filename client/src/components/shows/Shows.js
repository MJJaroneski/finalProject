import React from 'react';
import { PropTypes } from 'prop-types';

class Shows extends React.Component {
  render() {
    return (
      <div>Upcoming Shows</div>
    );
  }
}

Shows.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shows;
