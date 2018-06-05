import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from "axios";
import { Container, Card } from 'bloomer'
import './css/App.css'

import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import Stores from './Stores'
import NewStore from './NewStore'
import BackendStore from './BackendStore'

class App extends Component {
    
  render() {
    return (
      <Router>
        <div className="App">
          <Container className="wrapper">
          <Nav />
          <Card>
            {/* <Route exact path="/" component={Login}/> */}
              <Route exact path="/" component={Register} />
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
