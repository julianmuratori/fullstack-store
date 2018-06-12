import React, { Component } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewStore from './NewStore'
import BackendStore from './BackendStore'
import Stores from './Stores'

class Dashboard extends Component {
    render() {
        
        const { setUser, user } = this.props
        return (
            <Router>
            <div>
                <Nav setUser={setUser}/>

                <Route 
                    exact path="/stores"
                    render={() => <Stores user={user._id} />}
                    />
                
                <Route
                    exact path={`/stores/:slug`} 
                    render={(props) => <BackendStore {...props}/>}
                    />

                <Route 
                    exact path="/newstore"
                    render={() => <NewStore user={user._id}/>}
                    />
            </div>
            </Router>
        )
    }
}

export default Dashboard