import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import axios from "axios";
import { Container, Card } from 'bloomer'
import './css/App.css'

import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import Stores from './Stores'
import NewStore from './NewStore'
import BackendStore from './BackendStore'
import Dashboard from './Dashboard'

class App extends Component {

  state = {
    user: undefined
  }
    
  render() {
    return (
      <Router>
        <div className="App">
          <Container className="wrapper">
          <Nav />
          <Card>
            {/* <Route exact path="/" component={Login}/> */}
            <Route
              exact path="/"
              render={() =>
                // if there is a user set in state)
                this.state.user ? <Dashboard /> : <Redirect to="/register" />
              }
            />
              <Route
                exact
                path="/login"
                render={() =>
                  this.state.user ? <Redirect to="/" /> : <Login />
                }
              />
            <Route exact path="/register" component={Register} />
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
