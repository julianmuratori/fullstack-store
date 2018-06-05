import React, { Component } from 'react'
import { Field, Input, Label, Control, Button } from "bloomer";

class Register extends Component {

    state = {
        email: "",
        password: ""
    }

    // grab username and password from form and store in state
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // 2 submit to server with axios request

    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state

        console.log('submitted')
    }

    render() {
        return (
            <div>
                <h2>Please register an account below</h2>
                <form
                    action="POST"
                    className="login-form"
                    onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Email Address</Label>
                        <Control>
                            <Input
                                type="text"
                                name="email"
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

export default Register