import React from 'react';
import { NavTabs } from "../home/NavBar";
import "./artists.css";
import axios from 'axios';
class Artists extends React.Component {
// /client/Artist.js
  // initialize our sttate
  constructor(){
    super()
    this.state = {
    name: [],
    genre: "",
    city: "",
    state: ""
  };
  }
  


  componentDidMount() {
    this.loadArtists()
    console.log("test")
  }

  loadArtists = () => {
    axios.get("localhost:3000/routes/artists")
      .then(res =>
        console.log("response", res)
        // this.setState({ artists: res.data, name: "", genre: "", city: "", state: ""})
      )
      .catch(err => console.log(err));
  };

  render() {
  
    return (
      <div>
      <NavTabs />
      <body className="artistsBody">
        
      </body>
      </div>
      
    );
  }
}


export default Artists;