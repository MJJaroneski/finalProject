import React from 'react';
import { PropTypes } from 'prop-types';
import '../../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div>About</div>
    );
  }
}

About.propTypes = {
  text: PropTypes.string.isRequired
};

export default About;
