import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from "axios";
import { Container, Card } from 'bloomer'
import './css/App.css'

import Nav from './Nav'
import Stores from './Stores'
import NewStore from './NewStore'
import BackendStore from './BackendStore'

class App extends Component {
    
  render() {
    return (
      <Router>
        <div className="App">
        <Container>
          <Nav />
          <Card className="wrapper">
            <Route exact path="/stores" component={Stores}/>
            <Route path="/newstore" component={NewStore} />
            <Route path={`/stores/:slug`} component={BackendStore} />
          </Card>
        </Container>
        </div>

      </Router>
    )
  }
}

export default App;
