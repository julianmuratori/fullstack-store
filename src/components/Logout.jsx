import React from 'react'
import { removeToken } from '../services/tokenService'
import { Button } from 'bloomer'

const Logout = props => {

    const logout = () => {
        removeToken()
        props.setUser(null)
    }
    return <Button className="logout-button" onClick={logout}>Logout</Button>
}

export default Logout