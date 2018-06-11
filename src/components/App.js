import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import axios from "axios";
import { Container, Card } from 'bloomer'
import './css/App.css'
import { getToken } from '../services/tokenService'

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

  componentDidMount() {
    this.getCurrentUser()
  }

  setUser = user => {
    this.setState({ user })
  }

  getCurrentUser = user => {
    const token = getToken()

    if (token) {
      axios
        .get("/user/current", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.status === 200) {
            const user = res.data.payload
            this.setState({ user })
          }
         
        })   
    }
  }
    
  render() {

    const { user } = this.state

    return (
      <Router>
        <div className="App">
          <Container className="wrapper">
          <Card>
            <Switch>
              <Route
                exact path="/login"
                render={() => 
                  this.state.user ? <Redirect to="/"/> : <Login setUser={this.setUser}/>}
                />
              
              <Route
                path="/"
                render={() => 
                  this.state.user ? <Dashboard setUser={this.setUser} user={user}/> : <Redirect to="/login" />}
                />
              
              <Route 
                exact path="/register"
                render={() => 
                  this.state.user ? <Redirect to="/"/> : <Register setUser={this.setUser} />}
                />
            </Switch>
          </Card>
        </Container>
        </div>

      </Router>
    )
  }
}

export default App;
