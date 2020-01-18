import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import { NavTabs } from "../home/NavBar";
import "../Jumbotron";
import "./hiddenPage.css";

class Hidden extends React.Component {
    handleClick(){
        console.log('this is:', this);
}
    render(){
        return (
            <body className="hiddenBody">
            <NavTabs />
            <Jumbotron>
                <h1 className="display-4">Lucy Lane Directions</h1>
                <p className="lead">Please read carefully.</p>
                <button className="btn btn btn-md" href="../about/About.js" target="_blank" onClick={(e) => this.handleClick(e)}>FAQ's</button>
                <button
                    style={{
                        backgroundColor: "#F39303",
                    }}
                    >
                    </button>
              <br></br>
            </Jumbotron>
            <Container>
            <div className="address">
                <p> The Lucy Lane house is located at the end of a woodsy, quarter mile driveway that runs alongside interstate 150 - Chippenham Pkwy- just a 12 minute drive outside of Richmond City.</p>

                <p>As you arrive at the driveway you will see a column of signs including STOP, Do Not Enter No Outlet and a green "Lucy Lane" street sign. </p>
                <p>**If you dont see these signs in the photograph down below you're in the wrong place. Do Not pass go, do not collect $200.**</p>

                <p>Parking is available on the property however we ask that whenver possible you would please carpool or use a rideshare service. Parking is located along the right side of the driveway along the fence to the highway. If parking becomes full at any given show, there is free public parking in a deck at Chippenham Hospital (about a 5 minute walk but there are some spots without sidewalk) but please be courteous of hospital patrons.</p>

                <p>Every show at Lucy Lane is BYOB. </p>

                <p>The show is welcome to everyone over the age of 18 and you will be carded if you're drinking.</p>

                <p>Please reference these pictures and maps to help you out! The address for the show is as follows: </p>

                <p>7310 Jahnke Rd Chesterfield, Va 23225</p>
            </div>
            <img className="drivewayPic" src="../../img/driveway.jpg" alt="driveway signs" height="650" width="1000">
            </img>
            <a href="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50623.3211324962!2d-77.51800950711483!3d37.532497445293004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C%20Virginia!3m2!1d37.5407246!2d-77.4360481!4m5!1s0x89b112eff4088aa7%3A0xb69eac8b426f9f72!2s7310%20Jahnke%20Road%2C%20Richmond%2C%20VA!3m2!1d37.5162597!2d-77.52939049999999!5e0!3m2!1sen!2sus!4v1574479613898!5m2!1sen!2sus" className="map" data-iframely-url width="600" height="450" frameborder="0" allowfullscreen="">Google Map</a>
            </Container>
       </body>
      )
    };
}
Hidden.propTypes = {
    text: PropTypes.string.isRequired
  };

export default Hidden;