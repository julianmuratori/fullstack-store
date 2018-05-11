
import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarMenu, NavbarStart } from 'bloomer'
import logo from './assets/pig-logo.png'
// import bulma from 'bulma'
import './css/Nav.css'
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import { Link } from 'react-router-dom';

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
                        <Link to="/" className="navbar-item nav-end">
                            Logout
                        </Link>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav;