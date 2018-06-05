import React, { Component } from 'react'
import { Field, Input, Label, Control, TextArea, Button } from "bloomer";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }
    
    // grab username and password from form and store in state
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // 2 submit to server with axios request

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state

        console.log('submitted')
    }

    // 3 determine if accoutn exists and if name and pass are correct
    // 4 send user either to their homepage or tell them to try again

    render() {
        return (
            <div>
                <h2>Please login to view your account:</h2>
                <form 
                    action="POST" 
                    className="login-form"
                    onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Login</Label>
                        <Control>
                            <Input
                                type="text"
                                name="username"
                                onChange={this.handleChange} />                            
                        </Control>
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <Control>
                            <Input
                                type="text"
                                name="password"
                                onChange={this.handleChange} />                            
                        </Control>
                    </Field>
                    <Field>
                        <Control>
                            <Button 
                                type="submit"
                                isColor="primary"
                                isFullWidth={true}>Submit</Button>
                        </Control>
                    </Field>
                </form>
            </div>
        )
    }
}

export default Login