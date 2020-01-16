import React, { Component } from "react";
import { Container } from "../Grid";
import "./home.css";

class Landing extends Component {
  handleClick(){
    console.log('this is:', this);
  }
  render() {
    return (
      <body className="bodyHome">
      <Container>
        <h1 className="display-4 big">Lucy Lane</h1>
           <p className="lead">Lucy Lane is an artistic outlet for anyone wanting to expand and share their respective craft, with a direct focus on music. All artists are welcome to come indulge, and make our habitat a place of warm fuzzy feelings and beautiful expression.</p>

              <button className="btn btn-primary btn-lg mainBtn" href="#" target="_blank" onClick={(e) => this.handleClick(e)}>Learn more</button>
              <br></br>
      </Container>
      </body>
    );
  }
}
export default Landing;
