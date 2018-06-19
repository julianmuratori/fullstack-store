import React, { Component } from 'react'
import axios from 'axios'
import { setToken } from '../services/tokenService'
import { Field, Input, Label, Control, Button, Card } from "bloomer";
import { Link } from 'react-router-dom'
import logo from "./assets/pig-logo.png";

class Login extends Component {

    state = {
        email: "",
        password: ""
    }
    
    // grab email and password from form and store in state
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // submit post request to server with axios
    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state

        axios.post('/login', {
            email,
            password
        })
        .then(res => {
            if (res.status === 200) {
                const { payload, token } = res.data

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
                    <h4>Please login to view your account</h4>
                </div>
                
                <Card>
                <form 
                    action="POST" 
                    className="login-form"
                    onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Login</Label>
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
                        <p>Need to create an account? <a href="/register">Click here!</a></p>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Login