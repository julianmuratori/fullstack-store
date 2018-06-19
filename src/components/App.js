import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import axios from "axios";
import { Container } from 'bloomer'
import './css/App.css'
import { getToken } from '../services/tokenService'


import Login from './Login'
import Register from './Register'
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
          
            <Switch>
              <Route
                exact path="/login"
                render={() => 
                  this.state.user ? <Redirect to="/"/> : <Login setUser={this.setUser}/>}
                />
              
              
              <Route 
                exact path="/register"
                render={() => 
                  this.state.user ? <Redirect to="/"/> : <Register setUser={this.setUser} />}
                />
              
              <Route
                path="/"
                render={() => 
                  this.state.user ? <Dashboard setUser={this.setUser} user={user}/> : <Redirect to="/login" />}
                />
            </Switch>
          
        </Container>
        </div>

      </Router>
    )
  }
}

export default App;
