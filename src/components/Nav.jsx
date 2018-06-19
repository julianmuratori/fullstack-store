
import React, { Component } from 'react'
import { Navbar, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Control, NavbarBrand, NavbarBurger } from 'bloomer'
import logo from './assets/pig-logo.png'
// import bulma from 'bulma'
import './css/Nav.css'
import { Link } from 'react-router-dom';
import Logout from './Logout'

class Nav extends Component {

    state = {
        isActive: false
    }

    onClickNav = () => {
        const { isActive } = this.state

        this.setState({ isActive: !isActive })
    }
    
    render() {
        
        const { isActive } = this.state
        
        return (
            <Navbar className="navbar" >
            <NavbarBrand>
                <NavbarItem>
                    <img src={logo} alt="" className="piglogo" />
                </NavbarItem>
                <NavbarBurger 
                    isActive={this.state.isActive} 
                    onClick={this.onClickNav}
                    className="navbar-burger-button"/>
            </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive}>
                    <NavbarStart>
                        <Link to="/stores" className="navbar-item">
                            Stores
                        </Link>
                        <Link to="/newstore" className="navbar-item">
                            Create New Store
                        </Link>
                    </NavbarStart>
                    <NavbarEnd>
                        <Control className="logout-button">                            
                            <Logout setUser={this.props.setUser}/>
                        </Control>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav;