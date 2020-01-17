import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from "../Grid";
import password from "./Password";
import "./addressProtect.css"
class Directions extends React.Component {
  handleClick(){
    console.log('this is:', this);
    password();
  }
  render() {
    return (
      <body className="directBody">
      
      <Container>
          <h1 className="display-4">Lucy Lane Address Page</h1>
            <p className="lead">We do not give out the Lucy Lane address publicly. It is our home after all. If you’d like to come to a show,fill out <a className="formLink" href="hi">this form</a> and we’ll send you a password. Once you receive the password, click the button below and you’ll be able to access the address and all directions 8:00am the day of the show. You will not be able to access it after the show is over and the password changes every show.</p>
              <button className="btn btn-primary btn-lg passwordBtn" href="../Hidden/Hidden.js" target="_blank" onClick={(e) => this.handleClick(e)}>Enter Protected Area</button>
              <br></br>
      </Container>
      
      </body>
    );
  }
}
Directions.propTypes = {
  text: PropTypes.string.isRequired
};

export default Directions;