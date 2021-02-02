import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import HorizontalLogo from '../../assets/horizontallogo.png'


const Header = (props) => {

  const {
    logged_in,
    sign_in_route,
    sign_out_route,
    sign_up_route
  } = props

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
<div>
    <Navbar 
        className="navbar-top"
        expand="md"
        fixed="top">
    <NavbarBrand className= "nav-link">
      <NavLink to="/">
        <img className = "navbar-logo" src = { HorizontalLogo } />
        </NavLink>
    </NavbarBrand>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
      {
          !logged_in &&
          <>
        <NavItem >
        <a className= "nav-link" href={ sign_in_route }>Sign In
        </a>
      </NavItem>
      <NavItem >
        <a className= "nav-link" href={ sign_up_route }>Sign Up
        </a>
      </NavItem>
      </>
    }
          {
          logged_in &&
          <>
        <NavItem >
        <NavLink className= "nav-link" to='/UserDashboard'>User Dashboard
        </NavLink>
      </NavItem>
      <NavItem >
        <a className= "nav-link" href={ sign_out_route }>Sign Out
        </a>
      </NavItem>
      </>
    }
        </Nav>
    </Collapse>
  </Navbar>
</div>
  )
}




  export default Header;