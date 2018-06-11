
import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Control } from 'bloomer'
import logo from './assets/pig-logo.png'
// import bulma from 'bulma'
import './css/Nav.css'
import { Link } from 'react-router-dom';
import Logout from './Logout'

class Nav extends Component {
    render() {
        return (
            <Navbar className="navbar" >
                <NavbarMenu>
                    <NavbarItem>
                        <img src={logo} alt="" className="piglogo" />
                    </NavbarItem>
                    <NavbarStart>
                        <Link to="/stores" className="navbar-item">
                            Stores
                        </Link>
                        <Link to="/newstore" className="navbar-item">
                            Create New Store
                        </Link>
                    </NavbarStart>
                    <NavbarEnd>
                        <Control>                            
                            <Logout setUser={this.props.setUser}/>
                        </Control>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav;