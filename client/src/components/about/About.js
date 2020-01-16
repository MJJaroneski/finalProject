import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from "../Grid";
import "./about.css";
import "../Jumbotron";
import Jumbotron from '../Jumbotron';

class About extends React.Component {
  render() {
    return (
      <body className="aboutBody">
      <br></br>
        <Jumbotron>
          <h1>About Lucy Lane</h1>
            <message className="lead">This is a little bit of our history and some frequently asked questions about the venue.</message>
        </Jumbotron>
        <br></br>
        <Container>
        <h1 className="aboutLead">Lucy Lane's humble beginnings...</h1>
          <div className="aboutText">
              <p>Andrew Westbrook moved into Lucy Lane in 2010. Back then it was not as such but he was heavily involved in the Richmond music scene and wanted to curate the space back in the woods as somewhat of a commune. A place where people could come be themselves, be safe, have meals together, and have a place to share common interest and ideas. </p>
              <p>This unfortunately never took off as a formal concept but the thought and the idea were there. Fast forward a couple of years. Andrew was out one night and met one of his former co workers who he knew at one time was making music. Being in the market for a new band himself asked if he was still writing. Soon after a new band formed called Lucy in Battle Armor and they began to practice in the house.</p>
              <p>After a couple years of writing music and playing in the basement. The band started to hit the Richmond music scene. Making friends with a few bands around town it was seen on social media one day that a local band we had gigged with had a show pulled from underneath them due to a double booking at a venue in town. In the spirit of helping and community Lucy in Battle Armor decided to open up their practice space and their home and host the show to help out.</p>
              <p>One of the bands on the bill was on tour and was enamored  with our willingness to help out on such short notice. In their travels with another band they mentioned the space to the band that was touring with them  and they reached out to us. </p>
              <p>With no actual intent on starting or running a house venue we saw the joy and pleasure we could bring and throughout the years and word of mouth Lucy Lane has grown and become the place we all hold so dearly in our hearts today. Currently Andrew Westbrook, Andrew Smith, and Miranda Jaroneski live at Lucy Lane. We’d love for you to stop by and see us sometime.</p>
          </div>
          <h1 className="aboutLead">What to expect at a Lucy Lane show</h1>
          <div className="aboutText">
            <p>Lucy Lane is an artistic outlet for anyone wanting to expand and share their respective craft, with a direct focus on music. All artists are welcome to come indulge, and make our habitat a place of warm fuzzy feelings and beautiful expression. </p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item rules"><h3>We only have a few simple rules...</h3></li>
            <li className="list-group-item rules">Have fun</li>
            <li className="list-group-item rules">Spread love</li>
            <li className="list-group-item rules">Don't die</li>
            <li className="list-group-item rules">Don't drive drunk.</li>
            <li className="list-group-item rules">Don't let your friends drive drunk.</li>
          </ul>
          <br></br>
          <h3 className="harassment">**HARASSMENT OF ANY KIND WILL NOT BE TOLERATED!**</h3>
          <br></br>
          <h2 className="aboutLead">FAQ's:</h2>
          <br></br>
          <div className="list-group">
            <li className="list-group-item rules">So what is a DIY venue exactly?</li>
              <p className="answer">A DIY venue is a place for all artists to come and share their craft in a non-traditional way. We do not make profit from any donations. We focus on making our home a place where everyone feels welcome and safe, a sanctuary to hang out with old and new friends alike while experiencing live music.</p>
            <li className="list-group-item rules">
              How do you go about booking shows?
            </li>
              <p className="answer" >The process is usually pretty straight forward. A band on tour will give us dates they’d like to play and if were available we find local acts that fit the sound and we’ve got ourselves a show. We do not typically book weeknights and to maintain balance we do not book every weekend every month.</p>
            <li className="list-group-item rules">
                  What’s the address?
            </li>
                <p className="answer">We do not give out the address publicly. It is our home after all. If you’d like to come to a show, fill out this form and we’ll send you a password. You’ll be able to access the address and all directions 8:00am the day of the show. You will not be able to access it after the show is over and the password changes every show.</p>
            <li className="list-group-item rules">
                    Do you sell booze?
            </li>
                <p className="answer">NOPE! Every Lucy Lane show is BYOB. We ask to please be responsible when drinking and getting home. You are welcome to rideshare to and from the show. We will not let you drive intoxicated. That’s just not cool.</p>
            <li className="list-group-item rules">
                  Do you sell food?
            </li>
                <p className="answer">Wouldn’t that be awesome? We do not sell food during shows. If you’d like to bring us snacks, that’d be cool.
                </p>
            <li className="list-group-item rules">
                  What is the cost of the event and what does it go to?
            </li>
                <p className="answer">For each event we ask that you give a $5-$7 donation which goes to the band on tour for gas and road sandwiches.
                </p>
            <li className="list-group-item rules">
                  Do you offer any outlets for non musical artists? 
            </li>
                <p className="answer">Yes! We’ve hosted jewelry makers, painters, screenprinters, and more to sell their goods! Shoot us an email and we’ll get you set up!
                </p>
            <li className="list-group-item rules">
                  How do I become a staff member of LL?
            </li>
                <p className="answer">Pay rent! We have plenty of opportunities if you’d like to volunteer! You guessed it- send us an email.
                </p>
            <li className="list-group-item rules">
                  How else can I contribute to making LL better?
            </li>
                <p className="answer">Bring your friends, be nice to people, pick up your trash.
                </p>
          </div>
        </Container>
      </body>
    );
  }
}

About.propTypes = {
  text: PropTypes.string.isRequired
};

export default About;
