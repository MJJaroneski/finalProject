import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";



class Artists extends Component {
  state = {
    name: [],
    genre: "",
    city: "",
    state: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadArtists = () => {
    API.getArtists()
      .then(res =>
        this.setState({ artists: res.data, name: "", genre: "", city: "", state: ""})
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            
          </Col>
          <Col size="md-6 sm-12">
            
            {this.state.artists.length ? (
              <List>
                {this.state.artists.map(Artists => (
                  <ListItem key={Artists._id}>
                    <Link to={"/artists/" + Artists._id}>
                      <strong>
                        {Artists.name} by {Artists.genre}
                      </strong>
                    </Link>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Artists;
