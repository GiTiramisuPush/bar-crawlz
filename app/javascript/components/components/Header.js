import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
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
        className="navbar"
        expand="md"
        fixed="top">
    <NavbarBrand className= "nav-link" href="/"><img className = "navbar-logo" src = { HorizontalLogo } /></NavbarBrand>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
      {
          !logged_in &&
          <>
        <NavItem >
        <NavLink className= "nav-link" href={ sign_in_route }>Sign In
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink className= "nav-link" href={ sign_up_route }>Sign Up
        </NavLink>
      </NavItem>
      </>
    }
          {
          logged_in &&
          <>
        <NavItem >
        <NavLink className= "nav-link" href='/UserDashboard'>User Dashboard
        </NavLink>
      </NavItem>
      <NavItem >
        <NavLink className= "nav-link" href={ sign_out_route }>Sign Out
        </NavLink>
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