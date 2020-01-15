import React from 'react';
import { PropTypes } from 'prop-types';
import "./about.css"

class About extends React.Component {
  render() {
    return (
      <div>About</div>
      <div className="jumbotron">
            <h1 class="display-4">About Lucy Lane</h1>

            <p class="lead">This is a little bit of our history and some frequently asked questions about the venue.</p>

            <h1 class="display-4"></h1>
          <br/>
            
        </div>
    );
  }
}

About.propTypes = {
  text: PropTypes.string.isRequired
};

export default About;


// import React from "react";
// import 'about.css';
// function about() { 
//   // JS logic
//   $('.body').html(<h1> Hello World </h1>)
// }
// function about() {
    
//     return (
//     <div className='body'></div>
//     )
// }
// export default MatchIt;