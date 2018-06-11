import React, { Component } from 'react'
import { removeToken } from '../services/tokenService'
import { Button } from 'bloomer'


// class Logout extends Component {
    
//     logout = e => {
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <a href="/register" onClick={this.logout}>Logout</a>
//         )
//     }
// }

// export default Logout

const Logout = props => {

    const logout = () => {
        removeToken()
        props.setUser(null)
    }
    return <Button onClick={logout}>Logout</Button>
}

export default Logout