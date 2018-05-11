import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from "axios";
import { Container } from 'bloomer'
import './css/App.css'

import Nav from './Nav'
import Stores from './Stores'
import NewStore from './NewStore'

class App extends Component {
  componentDidMount() {
    axios.get("/hello").then(res => {
      console.log(res.data);
    });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
        <Container>
          <Nav />
          {/* <Stores /> */}
          <Route path="/Stores" component={Stores}/>
          <Route path="/newstore" component={NewStore} />
        </Container>
        </div>

      </Router>
    )
  }
}

export default App;
