import React, { Component } from 'react'
import { Field, Input, Label, Control, Button, Card } from "bloomer";
import axios from 'axios'
import { setToken } from '../services/tokenService'
import logo from "./assets/pig-logo.png"

class Register extends Component {

    state = {
        email: "",
        password: "",
        name: ""
    }

    // grab username and password from form and store in state
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // 2 submit to server with axios request

    handleSubmit = e => {
        e.preventDefault()
        const { name, email, password } = this.state

        axios.post('/register', {
            name,
            email,
            password
        })
        .then(res => {
            if (res.status === 200) {
                const { payload, token } = res.data;
                
                this.props.setUser(payload)
                setToken(token)
            } 
        })
    }

    render() {
        return (
            <div className="login-screen">
                <div className="login-screen-text">
                    <img src={logo} className="piglogo" alt=""/>
                    <h2>Plump Lil' Piggy</h2>
                    <h3>Inventory Management System</h3>
                    <h4>Please register to view your account</h4>
                </div>
                <Card>
                <form
                    action="POST"
                    className="login-form"
                    onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Name</Label>
                        <Control>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange} />
                        </Control>
                    </Field>
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
                                type="password"
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
                <div className="login-screen-register">
                    <p>Need to login instead? <a href="/login">Click here!</a></p>
                </div>
                </Card>
            </div>
        )
    }
}

export default Register