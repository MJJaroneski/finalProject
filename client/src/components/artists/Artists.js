import React from 'react';
import { PropTypes } from 'prop-types';

class Artists extends React.Component {
  render() {
    return (
      <div>Artists</div>
    );
  }
}

Artists.propTypes = {
  text: PropTypes.string.isRequired
};

export default Artists;
