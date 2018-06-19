import React, { Component } from 'react'
import { Card } from 'bloomer'

class WelcomeScreen extends Component {
    render() {
    const { user } = this.props

        return (
            <div className="welcome-screen">
                <Card>
                    <h4>Hi {user}!</h4>
                    <h5>If this is your first time here, create a store and start adding your products. Otherwise, head over to Stores to edit inventory on any shops you might have created.</h5>
                </Card>
            </div>
        )
    }
}

export default WelcomeScreen;